"use client"
import { animatePageOut } from "@/lib/animations";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string
  role?: string
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className=""
      onClick={handleClick}
    >
      {children} {/* Render children instead of label */}
    </button>
  );
};

export default TransitionLink;

