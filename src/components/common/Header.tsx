import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="border-b flex flex-col sm:flex-row items-start sm:items-center sm:pr-10 fixed w-full z-20 bg-background">
      <div className="py-3 px-8 flex flex-1 items-center">
        <Link href="/" className="mr-5 flex items-center" passHref>
          <p className={`ml-2 mr-4 text-lg font-semibold`}>Tool Empire</p>
        </Link>
        <Link
          href="/"
          className={`mr-5 text-sm ${pathname !== "/" && "opacity-50"}`}
          passHref
        >
          <p>Home</p>
        </Link>
        <Link
          href="/font-wise"
          className={`mr-5 text-sm ${
            pathname !== "/font-wise" && "opacity-60"
          }`}
          passHref
        >
          <p>Fontwise</p>
        </Link>
        {/* <Link
          href="/color-magic"
          className={`mr-5 text-sm ${
            pathname !== "/font-wise" && "opacity-60"
          }`}
          passHref
        >
          <p>Color Magic</p>
        </Link> */}
      </div>
      <div
        className="flex sm:items-center pl-8 pb-3 sm:p-0 gap-4
      "
      >
        <Button variant="outline" onClick={() => router.push("/contact")}>
          Feedback
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};
