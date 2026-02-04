import { FaDraftingCompass, FaTools, FaCouch, FaHammer, FaProjectDiagram } from "react-icons/fa";

const services = [
  { icon: <FaDraftingCompass size={28} />, title: "Architectural Design" },
  { icon: <FaTools size={28} />, title: "Construction" },
  { icon: <FaCouch size={28} />, title: "Interior Planning" },
  { icon: <FaHammer size={28} />, title: "Renovation" },
  { icon: <FaProjectDiagram size={28} />, title: "Project Management" },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-80">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center">
          Our Services
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition text-center cursor-pointer border flex flex-col items-center">
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
