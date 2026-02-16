const TEXT = 'No More Boring Ads \u2022 Comedy That Converts \u2022 Calgary Born & Caffeinated \u2022 Your Competitors Are Asleep \u2022 Google & YouTube Ads \u2022 Funny Sells \u2022 ';

export default function MarqueeDivider() {
  return (
    <div className="bg-black text-lime-400 py-6 border-y-4 border-black overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="inline-block animate-marquee font-display font-extrabold text-4xl uppercase tracking-widest">
        {TEXT}{TEXT}
      </div>
    </div>
  );
}
