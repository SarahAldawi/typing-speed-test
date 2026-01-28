export function getTypingStats(
  typed: string,
  passage: string,
  elapsedSeconds: number,
) {
  const correctChars = typed
    .split("")
    .filter((c, i) => c === passage[i]).length;
  const accuracy =
    typed.length > 0 ? Math.round((correctChars / typed.length) * 100) : 100;
  const wpm =
    elapsedSeconds > 0
      ? Math.round(correctChars / 5 / (elapsedSeconds / 60))
      : 0;
  return { accuracy, wpm };
}
