const testimonials = [
  {
    name: "John Smith",
    quote: "Rayie Technologies turned my dream home into reality. Highly professional team!",
  },
  {
    name: "Sarah Lee",
    quote: "Excellent service and design expertise. Our office renovation looks stunning.",
  },
  {
    name: "David Kumar",
    quote: "Timely delivery and great attention to detail. Truly recommend their services.",
  },
  {
    name: "Sarah Lee",
    quote: "Excellent service and design expertise. Our office renovation looks stunning.",
  },
  {
    name: "David Kumar",
    quote: "Timely delivery and great attention to detail. Truly recommend their services.",
  },
  {
    name: "David Kumar",
    quote: "Timely delivery and great attention to detail. Truly recommend their services.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">"{testi.quote}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">{testi.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
