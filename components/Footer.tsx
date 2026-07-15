export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Sources
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Built using Ostium's official documentation.
        </h2>

        <p className="mt-6 text-zinc-400">
          This website is an educational project explaining the architecture,
          perpetual instruments, leverage, liquidity, oracle pricing, and
          settlement mechanisms behind Ostium.
        </p>

        <a
          href="https://docs.ostium.com/protocol/how-ostium-works"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
        >
          View Official Documentation →
        </a>
      </div>
    </footer>
  );
}