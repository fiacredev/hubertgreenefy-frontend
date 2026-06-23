"use client"

import { useState, useEffect } from "react";
// import reactMarkdown from "react-markdown";

import {
  Trash2,
  Search,
  Package,
  MessageCircle,
  BarChart3,
  Settings,
  Gift
} from "lucide-react";
import AddPromotion from "./addPromotion";

const API = "http://localhost:5000";

interface Promotion {
  _id: string;
  title: string;
  description: string;
  discount: number; // better as number (even if backend sends string)
  expiresAt: string; // ISO date string
  active: boolean;
  __v?: number;
}

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "Unread" | "Read";
}


const AdminDashboard = () => {

  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  
  type ServiceStatus = "active" | "inactive";

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  useEffect(() => {

    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API}/api/messages`);
        const data = await res.json();
        const sorted = data.sort(
          (a: { updatedAt: string }, b: { updatedAt: string }) =>
            new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime()
         );
        setMessages(sorted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();

  }, []);

  const handleMarkAsRead = async (id: string) => {

    try {

      await fetch(`${API}/api/messages/${id}`, {
        method: "PUT"
      });

      setMessages(messages.map(m =>
        m._id === id ? { ...m, status: "Read" } : m
      ));

    } catch (err) {
      console.error(err);
    }

  };

const fetchPromotions = async (): Promise<void> => {
  try {
    const res = await fetch(`${API}/api/promotions`);
    const data = await res.json();

    // optional: normalize discount to number
    const normalized: Promotion[] = data.map((p: any) => ({
      ...p,
      discount: Number(p.discount),
    }));

    setPromotions(normalized);
  } catch (error) {
    console.error("Failed to fetch promotions:", error);
  }
};

const handleDeletePromotion = async (id: string): Promise<void> => {
  try {
    const res = await fetch(`${API}/api/promotions/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete promotion");
    }

    setPromotions(prev => prev.filter(p => p._id !== id));
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchPromotions();
}, []);


  const filteredPromotions = promotions.filter((promo: Promotion) =>
  promo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMessages = messages.filter(msg =>
    msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoggedIn)
    return (
      <div className="min-h-screen bg-gray-50">

        {/* SIDEBAR */}

          <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
            <h1 className="text-2xl font-bold text-green-500">
              Admin Panel
            </h1>
              <button onClick={() => setSidebarOpen(true)} className="text-green-400 text-xl">
                ☰
              </button>
          </div>

<div className={`fixed left-0 top-0 h-full w-52 md:w-64 
bg-white/10 backdrop-blur-md
shadow-lg border-r border-white/20
transform transition-transform duration-300
${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0 md:block`}>

              <div className="md:hidden flex justify-end p-4">
              <button onClick={() => setSidebarOpen(false)} className="text-green-400">
                ✕ Close
              </button>
            </div>

          <nav className="mt-6 px-4 space-y-2 text-green-400">

            <button
              onClick={() => setActiveTab("dashboard")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <BarChart3 size={20} className="mr-3" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("promotions")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <Gift size={20} className="mr-3" />
              Promotions
            </button>

            <button
              onClick={() => setActiveTab("messages")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <MessageCircle size={20} className="mr-3" />
              Messages
              <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {messages.filter(m => m.status === "Unread").length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <Settings size={20} className="mr-3" />
              Settings
            </button>

          </nav>

        </div>

        {/* MAIN CONTENT */}

        <div className="ml-0 md:ml-64 p-4 md:p-6">

          {/* HEADER */}

          <div className="flex justify-between mb-6">

            <h2 className="text-3xl font-bold capitalize text-gray-400">
              {activeTab}
            </h2>

            <div className="relative focus-within:ring-2 focus-within:ring-green-400 rounded-xl">

              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 md:w-5 md:h-5"
              />

              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-32 sm:w-48 md:w-64 pl-9 md:pl-10 pr-3 md:pr-4 py-2 border rounded-lg text-green-600 focus:outline-none text-sm md:text-base"
              />
            </div>

          </div>

          {/* DASHBOARD */}

          {activeTab === "dashboard" && (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-green-400">

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3>Total Promotions</h3>
                  <p className="text-3xl">{promotions.length}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3>Total Messages</h3>
                  <p className="text-3xl">{messages.length}</p>
                </div>
                

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3>Unread Messages</h3>
                  <p className="text-3xl">
                    {messages.filter(m => m.status === "Unread").length}
                  </p>
                </div>


              </div>

          )}

      {/* PROMOTIONS */}

            {activeTab === "promotions" && (
            <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
                <table className="min-w-[700px] w-full border-collapse">

                {/* Header */}
                <thead className="rounded-xl bg-gray-50 text-gray-500 text-sm uppercase">
                    <tr>
                    <th className="text-left px-6 py-3">Title</th>
                    <th className="text-left px-6 py-3">Discount</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Expires</th>
                    <th className="text-left px-6 py-3">Description</th>
                    <th className="text-left px-6 py-3">Action</th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="text-green-500 divide-y divide-green-50">
                    {filteredPromotions.map(promo => (
                    <tr
                        key={promo._id}
                        className="bg-white hover:bg-green-50 transition duration-200"
                    >
                        {/* Title */}
                        <td className="px-6 py-4 font-semibold">
                        {promo.title}
                        </td>

                        {/* Discount */}
                        <td className="px-6 py-4 font-medium">
                        {promo.discount}%
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold
                            ${
                            promo.active
                                ? "bg-green-100 text-green-700"
                                : "bg-green-50 text-green-400"
                            }`}
                        >
                            {promo.active ? "active" : "inactive"}
                        </span>
                        </td>

                        {/* Expiry */}
                        <td className="px-6 py-4">
                        {new Date(promo.expiresAt).toLocaleDateString()}
                        </td>

                        {/* Description */}
                        <td className="px-6 py-4 max-w-xs truncate">
                        {promo.description}
                        </td>

                        {/* Action */}
                        <td className="px-6 py-4">
                        <button
                            onClick={() => handleDeletePromotion(promo._id)}
                            className="text-green-500 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                        >
                            <Trash2 size={18} />
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>

                </table>
            </div>
            )}

          {/* MESSAGES */}

          {activeTab === "messages" && (

            <div className="space-y-3 md:space-y-4 text-green-400">

              {filteredMessages.map(msg => (

                <div
                  key={msg._id}
                  className="bg-white p-4 md:p-6 rounded-lg shadow border"
                >

                  <h4 className="font-semibold">{msg.name}</h4>
                  <p className="text-gray-500">{msg.email}</p>
                  <p className="text-gray-500">{msg.phone}</p>

                  <h5 className="mt-2">{msg.subject}</h5>
                  <p className="text-gray-600">{msg.message}</p>

                  {msg.status === "Unread" && (

                    <button
                      onClick={() => handleMarkAsRead(msg._id)}
                      className="mt-3 bg-green-500 text-gray-100 px-4 py-1 rounded"
                    >
                      Mark as Read
                    </button>

                  )}

                </div>

              ))}

            </div>

          )}

          {/* SETTINGS */}

    {activeTab === "settings" && (

        <div className="bg-white p-4 md:p-6 rounded-xl shadow space-y-4 md:space-y-6 text-green-400">
            
            <AddPromotion /> 

            {/* Logout Button */}
            <button
                onClick={logout}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
            >
                Logout
            </button>

        </div>

    )}

  </div>
      </div>
  );
  
  
  return(
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Welcome Back
            </h1>
            <p className="text-gray-500 mb-6">
            Please sign in to access your dashboard.
            </p>

            <a
            href="/login"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
            >
            Sign In
            </a>
        </div>
        </div>
    </>
  );

}
export default AdminDashboard;