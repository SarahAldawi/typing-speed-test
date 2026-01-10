import { Logo, LogoFull, Trophy } from "../../public/images";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        {/* Mobile logo */}
        <img
          src={Logo}
          alt="Mobile Logo"
          className="block md:hidden h-10 w-auto"
        />
        {/* Tablet + Desktop logo */}
        <img
          src={LogoFull}
          alt="Full Logo"
          className="hidden md:block h-12 w-auto"
        />
      </div>

      <div className="flex items-center gap-[var(--space-125)]">
        <img src={Trophy} alt="Trophy" />
        <span className="text-[var(--neutral-400)]">
          Personal best: <span className="text-[var(--neutral-0)]">92 WPM</span>
        </span>
      </div>
    </header>
  );
}
