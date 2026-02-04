const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src='/building.jpeg'  // put image in public folder
        alt="Architecture Project"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl px-6 md:px-12">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
            Designing Spaces<br />That Last
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Premium architectural solutions for residential and commercial projects.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-accent px-6 py-3 text-white font-semibold hover:opacity-90 transform 
  transition 
  duration-300 
  ease-in-out
  hover:bg-accent-dark
  hover:scale-105
  hover:shadow-lg cursor-pointer hover:border">
              View Projects
            </button>

            <button className="border border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
