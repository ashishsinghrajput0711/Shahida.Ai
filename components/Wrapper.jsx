"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function Wrapper({ children }) {
  const pathname = usePathname();

  return (
    <SessionProvider>
      <Navbar pathname={pathname} />
      <main>{children}</main>
    </SessionProvider>
  );
}
