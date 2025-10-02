"use client";
import Link from "next/link"; // 👈 you need this
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Dashboard", href: "/" },
  { title: "Search", href: "/search" },
  { title: "Watchlist", href: "/watchlist" },
];

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {navItems.map(({ title, href }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? "text-gray-100" : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
