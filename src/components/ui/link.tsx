"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className = "", onClick }: CustomLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink 
      href={href}
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={onClick}
      prefetch={true} // Force prefetch for smooth transitions
    >
      {children}
    </NextLink>
  );
}
