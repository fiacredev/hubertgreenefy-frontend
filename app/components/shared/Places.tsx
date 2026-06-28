import react from "react";

import {
  Building2,
  Building,
  GraduationCap,
  Dumbbell,
  HeartPulse,
  Landmark,
  PawPrint,
  Factory,
  ShieldCheck,
  Car,
  Baby,
  Scale,
  Store,
  Cog,
  Warehouse,
} from "lucide-react";

const items = [
  { label: "Offices", icon: Building2 },
  { label: "Complexes", icon: Warehouse },
  { label: "Universities", icon: GraduationCap },
  { label: "Gyms", icon: Dumbbell },
  { label: "Dental", icon: ShieldCheck },

  { label: "Banks", icon: Landmark },
  { label: "Veterinarians", icon: PawPrint },
  { label: "Government", icon: Building },
  { label: "Industrial", icon: Factory },
  { label: "Healthcare", icon: HeartPulse },

  { label: "Dealerships", icon: Car },
  { label: "Daycare", icon: Baby },
  { label: "Law Offices", icon: Scale },
  { label: "Retail", icon: Store },
  { label: "Manufacturing", icon: Cog },
];

export default function FacilitiesWeClean() {
  return (
    <section className="w-full bg-white px-6 py-16">
      {/* Header */}
      <div className="mx-auto max-w-6xl text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Facilities We Clean
        </h2>

        <p className="mt-4 text-lg font-medium text-gray-700">
          Commercial Cleaning Trusted Across Every Business Environment
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Stratus Clean delivers structured, high-performance cleaning programs
          customized to the unique needs of each facility we serve.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 bg-green-500 rounded-full" />
      </div>

      {/* Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.label}
        className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-md hover:shadow-xl transition"
      >
        <div className="rounded-xl bg-gradient-to-r from-green-300 via-teal-400 to-blue-500 rounded-xl p-4 sm:p-5 md:p-6 p-3">
          <Icon className="h-7 w-7 text-green-600" />
        </div>

        <span className="font-medium text-gray-800">
          {item.label}
        </span>
      </div>
    );
  })}
</div>    </section>
  );
}