import { useState } from "react";

interface PromotionFormProps {
  onPromotionAdded?: (promotion: any) => void;
}

const API = "http://localhost:5000";

const AddPromotion: React.FC<PromotionFormProps> = ({ onPromotionAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    discount: 0,
    expiresAt: "",
    active: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
    const { name, value, type } = e.target;


    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
        setFormData({
        ...formData,
        [name]: e.target.checked,
        });
    } else {
        setFormData({
        ...formData,
        [name]: value,
        });
    }
    };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.discount) {
      setError("Title, description, and discount are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API}/api/promotions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          discount: parseFloat(formData.discount as any),
          expiresAt: formData.expiresAt ? new Date(formData.expiresAt) : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server error");
      }

      if (onPromotionAdded) onPromotionAdded(data);

      setFormData({
        title: "",
        description: "",
        discount: 0,
        expiresAt: "",
        active: true,
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-green-500">Add Promotion</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg text-green-500 font-medium outline-none focus:ring-2 focus:ring-green-400"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg text-green-500 font-medium outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="number"
        name="discount"
        placeholder="Discount (%)"
        value={formData.discount}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg text-green-500 font-medium outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="date"
        name="expiresAt"
        value={formData.expiresAt}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg text-green-500 font-medium outline-none focus:ring-2 focus:ring-green-400"
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="active"
          checked={formData.active}
          onChange={handleChange}
          className="accent-white-500"
        />
        <span className="text-green-500">Active</span>
      </label>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Adding..." : "Add Promotion"}
      </button>
    </div>
  );
};

export default AddPromotion;