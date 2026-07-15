import FadeIn from "./FadeIn";

export default function ArchitectureDiagram() {
  return (
  <FadeIn>
    <section
      id="architecture"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <h2 className="text-4xl font-bold">
        The Ostium Architecture
      </h2>

      <p className="mt-4 max-w-2xl text-zinc-400">
        Trades settle onchain while directional exposure is hedged
        through institutional partners connected to global markets.
      </p>

      <div className="mt-16 flex flex-col items-center gap-6">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Trader
        </div>

        <div className="text-3xl text-zinc-500">↓</div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6 text-center">
          Onchain Settlement Layer
          <p className="mt-2 text-sm text-zinc-400">
            Smart contracts on Arbitrum
          </p>
        </div>

        <div className="text-3xl text-zinc-500">↓</div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6 text-center">
          Offchain Hedging Layer
          <p className="mt-2 text-sm text-zinc-400">
            Market makers and prime brokers
          </p>
        </div>

        <div className="text-3xl text-zinc-500">↓</div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6 text-center">
          Underlying Global Markets
          <p className="mt-2 text-sm text-zinc-400">
            Stocks • Forex • Commodities • Crypto
          </p>
        </div>

     </div>
    </section>
   </FadeIn>
  );
}