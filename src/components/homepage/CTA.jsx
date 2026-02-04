const CTA = () => {
  return (
    <section className="py-20 bg-accent text-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Let's Build Your Vision</h2>
      <p className="mt-4 text-lg md:text-xl">Start your project with us today.</p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-white border-2 text-accent px-6 py-3 font-semibold hover:opacity-90 transform 
  transition 
  duration-300 
  ease-in-out
  hover:bg-accent-dark
  hover:scale-105
  hover:shadow-lg cursor-pointer">
          Get a Quote
        </button>
        <button className="border-2 white px-6 py-3 font-semibold hover:bg-white hover:text-accent transform 
  transition 
  duration-300 
  ease-in-out
  hover:bg-accent-dark
  hover:scale-105
  hover:shadow-lg">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
