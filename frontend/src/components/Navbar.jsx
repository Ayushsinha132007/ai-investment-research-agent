function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-400">
          AI Investment Research Agent
        </h1>

        <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          Gemini AI
        </span>
      </div>
    </nav>
  );
}

export default Navbar;