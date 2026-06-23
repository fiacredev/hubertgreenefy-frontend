"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

const API = "http://localhost:5000";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, service, phone, message } = formData;

    if (!name || !email || !service) {
      alert(
        "Please fill in your name, email, and select a service before submitting your request."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject: service,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(`Error: ${data.error || "something went wrong"}`);
        return;
      }

      alert(`Merci, ${name}! Nous avons reçu votre demande.`);

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Échec de l’envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-green-50 py-24 px-6 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-left mb-12">
          <p className="capitalize tracking-[0.3em] text-sm text-green-600 mb-3">
            Please get in touch / Request a Quote
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
            Fill out the form below and we will respond to you quickly with a free quote tailored to your needs.
            we are here to answer any questions you may have about our services, pricing, or how we can help keep your property clean and safe.
          </p>

          <div className="mt-6 h-1 w-16 bg-green-500 rounded-full" />
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* INFO SIDE */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">(438) 403 – 7885</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">info@hubert.ca</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Hours</p>
                <p className="text-gray-600">
                  Monday – Saturday : 7am to 8pm <br />
                  Sunday : 8am to 5pm
                </p>
              </div>
            </div>

            {/* small highlight card */}
            <div className="p-5 rounded-xl bg-white border border-green-100 shadow-sm">
              <p className="text-green-700 font-semibold">
                Quick Response Guaranteed
              </p>
              <p className="text-sm text-gray-600 mt-1">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white border border-green-100 rounded-2xl p-8 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">

              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="p-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="md:col-span-2 p-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="md:col-span-2 p-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Choose a service</option>
                <option value="Nettoyage des conduits d’air">
                  Office And Commercial Cleaning..
                </option>
                <option value="Nettoyage de conduit de sécheuse">
                  Healthcare Facility Cleaning
                </option>
                <option value="Nettoyage de climatiseur">
                  Eco Friendly lawn cutting.
                </option>
                <option value="Ramonage de cheminée">
                  Carpet floor cleaning
                </option>
                <option value="Services multiples">
                  Move In/Out Cleaning
                </option>
                <option value="Services multiples">
                  Snow Removal Services
                </option>
              </select>

              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your need..."
                className="p-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* BUTTON */}
            <button
              disabled={isSubmitting}
              className="mt-6 w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}