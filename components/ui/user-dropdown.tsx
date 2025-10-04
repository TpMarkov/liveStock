"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { Avatar } from "./avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import NavItems from "./nav-items";
import { signOut } from "@/lib/actions/auth.actions";

const Userdropdown = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          className="rounded-full flex items-center gap-3 text-gray-400 hover:text-yellow-500
        "
          variant={"ghost"}
        >
          <Avatar className="w-8 h-8 flex items-center">
            <AvatarImage
              src={
                "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80"
              }
              sizes={user.name[0] + user.name[1]}
            />
            <AvatarFallback className="text-yellow-500 bg-yellow-900 text-sm font-bold"></AvatarFallback>
            {user.name[0] + user.name[1].toUpperCase()}
          </Avatar>
          <div className="hidden md:flex items-start flex-col">
            <span className="font-medium text-gray-400 text-base">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage
                src={
                  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80"
                }
                sizes="icons"
              />
              <AvatarFallback className="text-yellow-500 bg-yellow-900 text-sm font-bold"></AvatarFallback>
              {user.name[0] + user.name[1].toUpperCase()}
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-gray-400 text-base">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2 hidden sm:block" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Userdropdown;
