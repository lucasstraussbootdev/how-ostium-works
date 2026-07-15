export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
        Ostium Education
      </p>

      <h1 className="mt-4 text-6xl font-bold">
        How Ostium Works
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-zinc-400">
        Understand how Ostium brings global markets onchain through
        perpetuals, leverage, institutional liquidity, oracle pricing,
        and instant USDC settlement.
      </p>

      <button className="mt-8 w-fit rounded-full bg-white px-6 py-3 text-black">
        Explore the Protocol
      </button>
    </section>
  );
}