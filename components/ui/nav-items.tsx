"use client";
import Link from "next/link"; // 👈 you need this
import { usePathname } from "next/navigation";
import SearchCommand from "./search-command";

const navItems = [
  { title: "Dashboard", href: "/" },
  { title: "Search", href: "/search" },
  { title: "Watchlist", href: "/watchlist" },
];

const NavItems = ({
  initialStocks,
}: {
  initialStocks: StockWithWatchlistStatus[];
}) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {navItems.map(({ title, href }) => {
        if (title === "Search") {
          return (
            <li key={title}>
              <SearchCommand
                renderAs="text"
                label="Search"
                initialStocks={initialStocks}
              />
            </li>
          );
        }
        return (
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
        );
      })}
    </ul>
  );
};

export default NavItems;
