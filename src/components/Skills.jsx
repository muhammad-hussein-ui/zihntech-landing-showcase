import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills" className=" scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          What I work with
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <SkillCard
            title="HTML and CSS"
            text="Semantic markup and responsive layouts with Flexbox and Grid."
          />
          <SkillCard
            title="JavaScript"
            text="Events, DOM updates and form validation for pages that respond."
          />
          <SkillCard
            title="Git and GitHub"
            text="Small, honest commits and every project published on GitHub."
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
