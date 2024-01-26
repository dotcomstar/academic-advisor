import { Switch, useTheme } from "@mui/material";
import React from "react";
import { ColorModeContext } from "../ThemedLayout";
import { DARK_MODE_LABEL } from "../../constants/strings";

const ColorModeSwitch = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Switch
      aria-label={DARK_MODE_LABEL}
      checked={theme.palette.mode === "dark"}
      onChange={colorMode.toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
