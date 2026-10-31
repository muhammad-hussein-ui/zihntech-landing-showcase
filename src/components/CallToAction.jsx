import Button from "./Button";

function CallToAction() {
  return (
    <section id="contact" className="bg-emerald-50 px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-slate-900">
          Have a page in mind?
        </h2>
        <p className="mt-4 text-slate-600">
          See my code on GitHub, or start a conversation about your idea.
        </p>
        <div className="mt-8">
          <Button
            label="See my GitHub"
            href="https://github.com/muhammad-hussein-ui"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
