const TEXT = 'No More Generic Ads \u2022 Calgary Based \u2022 Viral Strategy \u2022 Google & YouTube \u2022 ';

export default function MarqueeDivider() {
  return (
    <div className="bg-black text-yellow-300 py-6 border-y-4 border-black overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee font-display font-extrabold text-4xl uppercase tracking-widest">
        {TEXT}{TEXT}
      </div>
    </div>
  );
}
