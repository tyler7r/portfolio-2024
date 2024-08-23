"use client";

import { IsMobile } from "./contexts/mobile";

export function Providers({ children }: { children: React.ReactNode }) {
  return <IsMobile>{children}</IsMobile>;
}
