import { useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";

const CATEGORIES = ["All", "Residential", "Commercial", "Retail", "Hospitality"];
const JSON_PATH = "/image.json"; // Your single combined JSON file

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch(JSON_PATH);
        const data = await res.json();

        // Flatten JSON into a single array and add category
        const merged = Object.entries(data).flatMap(([category, items]) =>
          items.map(item => ({ ...item, category }))
        );

        setProjects(merged);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gray-900 text-white text-center py-20 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
        <p className="mt-4 text-gray-300">
          A showcase of our architectural excellence
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap gap-4 justify-center">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border transition duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-linear-to-r from-gray-500 via-gray-400 to-gray-500 text-white shadow-lg transform scale-105"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="group rounded-lg overflow-hidden shadow hover:shadow-xl transition cursor-pointer"
          >
            <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-500 text-sm">{project.location}</p>
              <span className="inline-block mt-2 text-xs px-3 py-1 bg-gray-100 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
