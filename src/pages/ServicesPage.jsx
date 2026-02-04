import Navbar from "../components/global/Navbar";
import {
  Building2,
  Hammer,
  Sofa,
  RefreshCw,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    icon: <Building2 size={40} />,
    desc: "Concept-driven designs tailored to your vision and requirements.",
  },
  {
    title: "Construction",
    icon: <Hammer size={40} />,
    desc: "High-quality construction with durable materials and skilled execution.",
  },
  {
    title: "Interior Planning",
    icon: <Sofa size={40} />,
    desc: "Functional and elegant interior solutions that enhance living spaces.",
  },
  {
    title: "Renovation",
    icon: <RefreshCw size={40} />,
    desc: "Transforming existing structures into modern, efficient spaces.",
  },
  {
    title: "Project Management",
    icon: <ClipboardList size={40} />,
    desc: "End-to-end project coordination ensuring on-time delivery.",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gray-900 text-white text-center py-20 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-gray-300">
          Complete architectural solutions under one roof
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-8 bg-gray-50 rounded-lg shadow hover:shadow-xl transition
                       flex flex-col items-center text-center"
          >
            <div className="text-accent mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
