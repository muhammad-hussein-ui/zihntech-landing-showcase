import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Projects I have built
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Tasty Bites"
            description="A restaurant landing page built from a design, with a CSS Grid gallery."
            tools="HTML5, CSS3"
          />
          <ProjectCard
            title="Flores"
            description="A skincare product page matched to a Figma design, with hover effects in pure CSS."
            tools="HTML5, CSS3, Figma"
          />
          <ProjectCard
            title="Zihntech landing page"
            description="A clickable Figma prototype for the academy's own landing page."
            tools="Figma"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
