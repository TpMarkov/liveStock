import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./nav-items";
import Userdropdown from "./user-dropdown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          {/* NavItems */}
          <NavItems />
        </nav>
        {/* UserDropdown */}
        <Userdropdown user={user} />
      </div>
    </header>
  );
};

export default Header;
