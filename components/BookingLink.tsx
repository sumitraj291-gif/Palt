"use client";

import { usePathname } from "next/navigation";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type BookingLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export default function BookingLink({ children, ...props }: BookingLinkProps) {
  const pathname = usePathname();
  const href = pathname === "/" ? "#booking" : "/contact#booking";

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
