import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React, { ReactNode, useEffect } from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

interface Props {
  children: ReactNode;
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const ThemedLayout = ({ children }: Props) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const setModeAndStore = (mode: "light" | "dark") => {
    setMode(mode);
    localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    // First check if the user has already set a theme preference.
    // If not, check if the user already has a specified theme from
    // their browser.
    // Defaults to light mode.
    const existingPreference = localStorage.getItem("theme");
    if (existingPreference) {
      existingPreference === "light" ? setMode("light") : setMode("dark");
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setModeAndStore("dark");
      } else {
        setModeAndStore("light");
      }
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        if (mode === "light") {
          setMode("dark");
          localStorage.setItem("theme", "dark");
        } else {
          setMode("light");
          localStorage.setItem("theme", "light");
        }
      },
    }),
    [mode]
  );

  // Update the theme only if the mode changes
  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === "dark" ? "dark" : "light",
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#D3D6DA",
                  light: "#878A8C",
                  darker: "#D3D6DA",
                },
                error: { main: "#787C7E" },
                info: { main: "#FF0000", dark: "#FFF" },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#818384",
                  light: "#565758",
                  darker: "#3A3A3C",
                },
                error: { main: "#3A3A3C" },
                info: { main: "#FF0000", dark: "#121213" },
              }),
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default ThemedLayout;
