const projects = [
  { name: "Skyline Towers", location: "New York", img: '/building.jpeg' },
  { name: "Lakeside Villas", location: "California", img: '/building.jpeg' },
  { name: "Modern Office Hub", location: "Texas", img: '/building.jpeg' },
  { name: "Urban Apartments", location: "Chicago", img: '/building.jpeg' },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center">
          Featured Projects
        </h2>

        <div className="mt-10 cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={project.img} alt={project.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-accent text-black border-2 px-6 py-3 font-semibold hover:opacity-90 transform 
  transition 
  duration-300 
  ease-in-out
  hover:bg-accent-dark
  hover:scale-105
  hover:shadow-lg cursor-pointer">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
