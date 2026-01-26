import { useEffect, useState } from "react";

type TimerProps = {
  mode: "up" | "down";
  startSeconds?: number;
  isRunning: boolean;
  onComplete?: () => void;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");

  const secs = (seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${secs}`;
};

export default function Timer({
  mode,
  startSeconds = 60,
  isRunning,
  onComplete,
}: TimerProps) {
  const [seconds, setSeconds] = useState(mode === "down" ? startSeconds : 0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (mode === "down") {
          if (prev <= 0) {
            clearInterval(interval);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode, onComplete]);

  useEffect(() => {
    setSeconds(mode === "down" ? startSeconds : 0);
  }, [mode, startSeconds]);

  return <span className="text-preset-2">{formatTime(seconds)}</span>;
}
