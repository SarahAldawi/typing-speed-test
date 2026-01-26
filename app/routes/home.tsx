import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Controls from "~/components/Controls";
import PassageContainer from "~/components/PassageContainer";
import passages from "../../data/data.json";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type Difficulty = "easy" | "medium" | "hard";
export default function Home() {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("easy");
  const [started, setStarted] = useState(false);
  const pool = passages[selectedDifficulty];
  const randomPassage = pool[Math.floor(Math.random() * pool.length)].text;
  return (
    <div className="page-container min-h-screen">
      <div
        className="
    space-y-[var(--space-400)]
    md:space-y-[var(--space-500)]
    lg:space-y-[var(--space-800)]
  "
      >
        <Header />
        <Controls
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={setSelectedDifficulty}
        />
      </div>

      <div className="mt-[var(--space-400)]">
        <PassageContainer
          passage={randomPassage}
          started={started}
          setStarted={setStarted}
        />
      </div>
    </div>
  );
}
