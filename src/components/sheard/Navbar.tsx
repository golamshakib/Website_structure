"use client";

import logoImage from "@/assets/logo.webp";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/button";

const NAV_ITEMS = [
  { label: "ABOUT VCAD", href: "/" },
  { label: "COURSES", href: "/courses" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    <div className="bg-[#040D3D] py-6.25 relative px-5 xl:px-0">
      <nav className="grid grid-cols-2 gap-6 container mx-auto">
        <div className="flex items-center h-14 w-36">
          <Image
            src={logoImage}
            alt="VCAD Logo"
            width={500}
            height={500}
            className=""
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <div className="hidden md:flex items-center gap-14 text-[11px] font-semibold tracking-widest text-white uppercase">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href.startsWith("#")
                ? false
                : item.href === "/"
                  ? pathName === "/"
                  : pathName === item.href ||
                    pathName.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 transition-colors duration-300 ease-in-out text-base font-medium leading-6 ${
                    isActive
                      ? "text-primary border-primary"
                      : "border-transparent hover:text-primary "
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {pathName === "/" || pathName === "/courses" ? (
            <button
              ref={buttonRef}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 items-end "
            >
              {isOpen ? (
                <X className="text-white size-8" />
              ) : (
                <Menu className="text-white size-8" />
              )}
            </button>
          ) : (
            <div className="max-w-52">
              <Button>Apply Now</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-10 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-6 py-4 text-[11px] font-semibold tracking-widest text-white uppercase border-t border-white/10">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href.startsWith("#")
              ? false
              : item.href === "/"
                ? pathName === "/"
                : pathName === item.href ||
                  pathName.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`pb-1 border-b-2 w-fit transition-colors duration-300 ease-in-out text-base font-medium leading-6 ${
                  isActive
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
