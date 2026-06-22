"use client";

import React, { useEffect, useState } from "react";

const API = "https://airflow-backend-a2bm.onrender.com";

type Promotion = {
  _id: string;
  title: string;
  description: string;
  discount: string;
  expiresAt: string;
  active: boolean;
};

export default function Promotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const res = await fetch(`${API}/api/services/promotions`);
        const data = await res.json();
        setPromotions(data);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      id="promotions"
      className="bg-white py-24 px-6 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header (LEFT ALIGNED) */}
        <p className="capitalize tracking-[0.3em] text-sm text-green-600 mb-3">
          Enjoy Our Promotions
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Promotions
        </h2>

        <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed text-lg">
          Take advantage of our latest offers and save on professional cleaning services.
        </p>

        {/* Grid */}
        {loading ? (
          <p className="text-gray-500">Chargement des promotions...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions
              .filter((item) => item.active)
              .map((item) => (
                <div
                  key={item._id}
                  className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-500 to-sky-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.discount}% OFF
                  </div>

                  {/* Date */}
                  <p className="text-xs text-gray-400 mb-3">
                    Expire le : {formatDate(item.expiresAt)}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-semisold text-gray-900 mb-2 capitalize">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Réclamer l’offre
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}