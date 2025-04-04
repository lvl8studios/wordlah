import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  //SheetDescription
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
// import { Profile } from "../pages/Profile";

interface RouteProps {
  to: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    to: "/wordlah",
    label: "WordLah",
  },
  // {
  //   to: "/leaderboard",
  //   label: "Leaderboard",
  // },
  {
    to: "/about",
    label: "About",
  },
  // {
  //   to: "/profile",
  //   label: "Profile",
  // },
  // {
  //   to: "/auth",
  //   label: "Auth",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex no-underline hover:text-blue-500 "
            >
              <img
                src="/logo-big.png"
                alt="WordLah Logo"
                className="h-8 w-auto mr-2"
              />            </Link>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden justify-between">
            <ModeToggle />
            {/* <Profile /> */}


            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ to, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>

                  ))}

                  <a
                    href="https://github.com/GyatGames/wordlah"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>



          </span>

          {/* Desktop */}
          <nav className="hidden md:flex gap-2 pl-[95px]">
            {routeList.map(({ to, label }: RouteProps, i) => (
              <Link
                key={i}
                to={to}
                className={`text-[45px] ${buttonVariants({ variant: "ghost" })}`}
              >
                {label}
              </Link>
            ))}

          </nav>



          <div className="hidden md:flex gap-2">
            <a
              href="https://github.com/GyatGames/wordlah"
              target="_blank"
              rel="noreferrer noopener"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>

            <ModeToggle />
            {/* <Profile /> */}

          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
