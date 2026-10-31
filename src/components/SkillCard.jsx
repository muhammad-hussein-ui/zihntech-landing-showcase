// { title, text } are props. Destructuring pulls them out of the props object.
function SkillCard({ title, text }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-emerald-700">{title}</h3>
      <p className="mt-3 text-slate-600">{text}</p>
    </article>
  );
}

export default SkillCard;
