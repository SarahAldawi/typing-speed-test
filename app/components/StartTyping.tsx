export default function StartTyping() {
  return (
    <div className="flex justify-center items-center flex-col text-preset-3 text-semibold text-neutral-0">
      <button className="bg-[var(--blue-600)] hover:bg-[var(--blue-400)] cursor-pointer px-[var(--space-300)] py-[var(--space-200)] rounded-[var(--radius-12)] mb-[var(--space-250)]">Start Typing Test</button>
      <p>or click the text and start typing</p>
    </div>
  );
}
