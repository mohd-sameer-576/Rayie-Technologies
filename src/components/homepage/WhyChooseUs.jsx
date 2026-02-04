import { FaUsers, FaCubes, FaClock, FaDollarSign } from "react-icons/fa";

const reasons = [
  { icon: <FaUsers size={28} />, title: "Experienced Team" },
  { icon: <FaCubes size={28} />, title: "Quality Materials" },
  { icon: <FaClock size={28} />, title: "On-Time Delivery" },
  { icon: <FaDollarSign size={28} />, title: "Transparent Pricing" },
];
const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "120+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
          Why Choose Us
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition border cursor-pointer flex flex-col items-center"
            >
              <div className="mb-4 text-accent">{reason.icon}</div>
              <h3 className="font-semibold text-lg text-center">
                {reason.title}
              </h3>
            </div>
          ))}

          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition border cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-accent">{stat.number}</h3>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
