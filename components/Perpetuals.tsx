import FadeIn from "./FadeIn";

export default function Perpetuals() {
  return (
    <FadeIn>
    <section
      id="perpetuals"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Perpetual Instruments
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Gain exposure without owning the asset.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        Perpetual instruments let traders speculate on price movements
        without directly owning stocks, commodities, forex, or crypto.
        Positions never expire and are fully collateralized in USDC.
      </p>

      <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="flex flex-col items-center gap-6 text-center">

          <div className="rounded-2xl border border-zinc-700 px-6 py-4">
            Trader
          </div>

          <div className="text-3xl text-zinc-500">
            ↓
          </div>

          <div className="rounded-2xl border border-zinc-700 px-6 py-4">
            Perpetual Position
          </div>

          <div className="text-3xl text-zinc-500">
            ↓
          </div>

          <div className="rounded-2xl border border-zinc-700 px-6 py-4">
            Price Exposure to Global Markets
          </div>

        </div>
      </div>
    </section>
    </FadeIn>
  );
}
