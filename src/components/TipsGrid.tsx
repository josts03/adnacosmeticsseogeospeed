import type { Step } from '../data/services';

/** Bloki z naslovom in besedilom – stil info blokov s strani O meni. */
export function TipsGrid({ items }: { items: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((tip, i) => (
        <div key={i} className="bg-brand-nude/30 p-6">
          <h3 className="font-serif text-xl mb-3 text-brand-dark">{tip.title}</h3>
          <p className="text-brand-dark/70 leading-relaxed">{tip.text}</p>
        </div>
      ))}
    </div>
  );
}
