"use client";
import useAnimatedRouter from "@/app/hooks/useAnimatedRouter";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  href: string,
  children: React.ReactNode,
};
export default function AnimatedLink({ href, children, className, onClick } : 
  {
    href : string, children : ReactNode, className? : string, onClick? : Function
  }) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        animatedRoute(href);
      }}
      className={className}
      passHref
    >
      {children}
    </Link>
  );
}