import Button from "./Button";

function PricingCard({ name, price, summary }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-4 text-4xl font-bold text-emerald-700">{price}</p>
      <p className="mt-3 flex-1 text-slate-600">{summary}</p>
      <div className="mt-6">
        <Button label="Ask about this" href="#contact" />
      </div>
    </article>
  );
}

export default PricingCard;
