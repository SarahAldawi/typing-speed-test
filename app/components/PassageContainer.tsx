import StartTyping from "./StartTyping";
import { UndoIcon } from "public/images";
export default function PassageContainer() {
  return (
    <section>
      <div className="relative w-full">
        <div className="blur-md">
          <p className="text-preset-1 text-neutral-400">
            The archaeological expedition unearthed artifacts that complicated
            prevailing theories about Bronze Age trade networks. Obsidian from
            Anatolia, lapis lazuli from Afghanistan, and amber from the
            Baltic—all discovered in a single Mycenaean tomb—suggested
            commercial connections far more extensive than previously
            hypothesized. "We've underestimated ancient peoples' navigational
            capabilities and their appetite for luxury goods," the lead
            researcher observed. "Globalization isn't as modern as we assume."
          </p>
        </div>
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <StartTyping />
        </div>
      </div>
      <div className="flex justify-center items-center border-t border-[var(--neutral-700)] md:mt-[var(--space-800)] mt-[var(--space-400)]">
        <button className="flex gap-[var(--space-125)] bg-[var(--neutral-800)] rounded-[var(--radius-12)] px-[var(--space-200)] py-[var(--space-125)] mt-[var(--space-400)]">
          Restart Typing
          <img src={UndoIcon} alt="Undo" />
        </button>
      </div>
    </section>
  );
}
