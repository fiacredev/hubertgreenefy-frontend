"use client";
import { useState, useEffect } from "react";
import { Gift } from "lucide-react";

export default function PromoButton() {
  const scrollToPromo = () => {
    const section = document.getElementById("promotions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showBadge, setShowBadge] = useState(false);

  // Show badge after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <button
      onClick={scrollToPromo}
      className="fixed top-70 left-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
      aria-label="Go to promotion"
    >
      <Gift className="w-4 h-4" />
        {showBadge && (
<div className="absolute -top-8 -right-2 bg-green-700 text-white  px-2 py-2 text-sm rounded-full shadow-lg flex items-center justify-center animate-bounce">
  Promo!?
</div>
        )}
    </button>
  );
}