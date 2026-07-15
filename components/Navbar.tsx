export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold">
          How Ostium Works
        </a>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#architecture" className="hover:text-white">
            Architecture
          </a>

          <a href="#perpetuals" className="hover:text-white">
            Perpetuals
          </a>

          <a href="#leverage" className="hover:text-white">
            Leverage
          </a>

          <a href="#liquidity" className="hover:text-white">
            Liquidity
          </a>

          <a href="#oracles" className="hover:text-white">
            Oracles
          </a>

          <a href="#settlement" className="hover:text-white">
            Settlement
          </a>
        </div>
      </div>
    </nav>
  );
}