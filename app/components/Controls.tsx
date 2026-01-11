export default function Controls({
  onSelectDifficulty,
  selectedDifficulty,
}: {
  onSelectDifficulty: (difficulty: "easy" | "medium" | "hard") => void;
  selectedDifficulty: "easy" | "medium" | "hard";
}) {
  const difficulties: { label: string; value: "easy" | "medium" | "hard" }[] = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];
  return (
    <section className="flex flex-col gap-(--space-250) items-center justify-between">
      <div className="flex w-full md:justify-start justify-center">
        <div className="flex flex-col lg:flex-row md:flex-row items-center gap-[var(--space-150)] pr-[var(--space-300)] border-r border-[var(--neutral-700)]">
          <span className="text-preset-3 text-(--neutral-400)">WPM:</span>
          <span className="text-preset-2">0</span>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row items-center gap-[var(--space-150)] px-[var(--space-300)] border-r border-[var(--neutral-700)]">
          <span className="text-preset-3 text-(--neutral-400)">Accuracy:</span>
          <span className="text-preset-2">100%</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-(--space-150) pl-(--space-300)">
          <span className="text-preset-3 text-(--neutral-400)">Time:</span>
          <span className="text-preset-2">0:60</span>
        </div>
      </div>

      <div className="md:flex flex-1 w-full items-center">
        <div className="flex space-x-(--space-150) md:hidden">
          <select
            className="select-btn w-1/2"
            onChange={(e) =>
              onSelectDifficulty(e.target.value as "easy" | "medium" | "hard")
            }
          >
            {difficulties.map((diff) => (
              <option key={diff.value} value={diff.value}>
                {diff.label}
              </option>
            ))}
          </select>
          <select className="select-btn w-1/2">
            <option>Timed(60s)</option>
            <option>Passage</option>
          </select>
        </div>
        <div className="flex items-center gap-[var(--space-150)] pe-[var(--space-200)] md:border-r md:border-[var(--neutral-700)]">
          <span className="hidden md:inline text-preset-5 text-(--neutral-400)">
            Difficulty:
          </span>
          <div className="hidden md:flex text-preset-5  space-x-(--space-75)">
            {difficulties.map((diff) => (
              <button
                key={diff.value}
                className={`select-btn ${selectedDifficulty === diff.value ? "bg-blue-500" : ""}`}
                onClick={() => onSelectDifficulty(diff.value)}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-[var(--space-150)] ms-[var(--space-200)]">
          <span className="hidden md:inline text-preset-5 text-(--neutral-400)">
            Mode:
          </span>
          <div className="hidden md:flex text-preset-5 space-x-(--space-75)">
            <button className="select-btn">Timed(60s)</button>
            <button className="select-btn">Passage</button>
          </div>
        </div>
      </div>
    </section>
  );
}
