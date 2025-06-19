export function Nav({ activeSection, onSectionChange }) {
  return (
    <nav className="flex justify-center items-center bg-gradient-to-b p-6 rounded-3xl border-2 border-slate-400/60 mb-4 backdrop-blur-[6px] bg-white/10">
      <div className="flex gap-6">
        <button
          onClick={() => onSectionChange("projects")}
          className={`px-6 py-3 text-xl font-semibold rounded-lg border-4 transition-all duration-300 ${
            activeSection === "projects"
              ? "bg-amber-400 text-black border-amber-400"
              : "hover:bg-amber-400 hover:text-black text-amber-200 border-amber-400"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => onSectionChange("education")}
          className={`px-6 py-3 text-xl font-semibold rounded-lg border-4 transition-all duration-300 ${
            activeSection === "education"
              ? "bg-amber-400 text-black border-amber-400"
              : "hover:bg-amber-400 hover:text-black text-amber-200 border-amber-400"
          }`}
        >
          Education
        </button>
      </div>
    </nav>
  );
}
