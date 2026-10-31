function ProjectCard({ title, description, tools }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {/* a solid colour block stands in for a screenshot */}
      <div className="h-40 bg-emerald-100" aria-hidden="true"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600">{description}</p>
        <p className="mt-4 text-sm font-medium text-emerald-700">{tools}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
