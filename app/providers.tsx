"use client";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { IsMobile } from "./contexts/mobile";
import theme from "./contexts/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <IsMobile>{children}</IsMobile>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
