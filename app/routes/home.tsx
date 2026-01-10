import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Controls from "~/components/Controls";
import PassageContainer from "~/components/PassageContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
        <Controls />
      </div>

      <div className="mt-[var(--space-400)]">
        <PassageContainer />
      </div>
    </div>
  );
}
