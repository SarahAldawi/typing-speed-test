import { useEffect, useRef, useState } from "react";
import StartTyping from "./StartTyping";
import { UndoIcon } from "public/images";
export default function PassageContainer({
  passage,
  started,
  setStarted,
  elapsedSeconds,
}: {
  passage: string;
  started: boolean;
  setStarted: (started: boolean) => void;
  elapsedSeconds: number;
}) {
  const [typed, setTyped] = useState("");
  const [mistakes, setMistakes] = useState<Set<number>>(new Set());

  const inputRef = useRef<HTMLInputElement>(null);

  const wpm = elapsedSeconds
    ? Math.round(typed.length / 5 / (elapsedSeconds / 60))
    : 0;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!started) setStarted(true);

    if (e.key === "Backspace") {
      e.preventDefault();
      setTyped((prev) => prev.slice(0, -1));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const index = value.length - 1;
    const char = value[index];
    const expected = passage[index];

    if (char && expected && char !== expected) {
      setMistakes((prev) => new Set(prev).add(index));
    }

    setTyped(value);
    if (value.length === passage.length) {
      setStarted(false);
    }
  };

  const handleRestart = () => {
    setTyped("");
    setMistakes(new Set());
    inputRef.current?.focus();
  };

  return (
    <section>
      <div className="relative w-full">
        <div
          className={`${!started ? "blur-sm" : ""}`}
          onClick={() => inputRef.current?.focus()}
        >
          <input
            ref={inputRef}
            type="text"
            className="absolute opacity-0 pointer-events-none"
            value={typed}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <p className="text-preset-1 text-neutral-400 whitespace-pre-wrap">
            {passage.split("").map((char, i) => {
              const typedChar = typed[i];
              let className = "text-neutral-400";

              if (typedChar != null && typedChar !== char) {
                className = "text-[var(--red-500)] underline";
              } else if (typedChar === char && mistakes.has(i)) {
                className = "text-[var(--yellow-400)]";
              } else if (typedChar === char) {
                className = "text-[var(--green-500)]";
              }

              return (
                <span key={i} className={className}>
                  {char}
                </span>
              );
            })}
          </p>
        </div>

        {!started && (
          <div className="flex justify-center items-center flex-col text-preset-3 text-semibold text-neutral-0">
            <StartTyping onStart={() => setStarted(true)} />
          </div>
        )}
      </div>
      <div className="flex justify-center items-center border-t border-[var(--neutral-700)] md:mt-[var(--space-800)] mt-[var(--space-400)]">
        <button
          className="flex gap-[var(--space-125)] bg-[var(--neutral-800)] rounded-[var(--radius-12)] px-[var(--space-200)] py-[var(--space-125)] mt-[var(--space-400)]"
          onClick={handleRestart}
        >
          Restart Typing
          <img src={UndoIcon} alt="Undo" />
        </button>
      </div>
    </section>
  );
}
