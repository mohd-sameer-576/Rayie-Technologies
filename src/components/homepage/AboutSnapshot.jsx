const AboutSnapshot = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            About Rayie Technologies
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            At Rayie Technologies, we craft architectural spaces that blend elegance with functionality. 
            With over <strong>15 years of experience</strong>, our team brings your vision to life with precision and creativity.
            Our philosophy centers around sustainable design, attention to detail, and client satisfaction.
            At Rayie Technologies, we craft architectural spaces that blend elegance with functionality. With over 15 years of experience, our team brings your vision to life with precision and creativity. Our philosophy centers around sustainable design, attention to detail, and client satisfaction.

We specialize in both residential and commercial projects, transforming concepts into inspiring, functional spaces. Every project is approached with a commitment to quality, innovation, and collaboration with our clients, ensuring that the final result exceeds expectations.
          </p>
          <button className="mt-6 bg-accent text-black px-6 py-3 font-semibold hover:opacity-90 transform 
  transition 
  duration-300 
  ease-in-out
  hover:bg-accent-dark
  hover:scale-105
  hover:shadow-lg cursor-pointer border-2">
            Learn More
          </button>
        </div>

        {/* Right: Image */}
        <div className="md:w-[40vw]">
          <img 
            src='/building.jpeg' // place this in public folder
            alt="Architectural project" 
            className="rounded-lg shadow-lg w-full object-cover h-[90vh]"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSnapshot;
