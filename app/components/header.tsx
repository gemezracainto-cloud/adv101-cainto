"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-container flex w-full items-center justify-between px-6">
        <Link href="/" className="logo">
          My Web
        </Link>

        <nav className="navigation ml-auto flex items-center gap-4 sm:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


