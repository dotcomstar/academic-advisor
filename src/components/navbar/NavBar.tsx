import { Box, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { APP_TITLE } from "../../constants/strings";
import { useNavigate } from "react-router-dom";
import ProfileButton from "../auth/ProfileButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";
import ColorModeSwitch from "./ColorModeSwitch";

interface NavBarProps {
  hasBottomBorder?: boolean;
}

const NavBar = ({}: NavBarProps) => {
  const matches = useMediaQuery("(min-width:600px)");
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <Paper elevation={2}>
      <Stack
        direction="row"
        paddingX="10px"
        paddingBottom={matches ? "10px" : "0px"}
        paddingTop={matches ? "10px" : "4px"}
        justifyContent="space-between"
        alignItems="center"
        px="calc(max(3vw,20px))"
      >
        {isAuthenticated ? (
          <ProfileButton size="small" />
        ) : (
          <LoginButton size="small" />
        )}

        <Box onClick={() => navigate("/")}>
          <Typography
            translate="no"
            variant="h3"
            fontSize={"1.5REM"}
            top={matches ? "15px" : "10px"}
          >
            {APP_TITLE}
          </Typography>
        </Box>
        <ColorModeSwitch />
      </Stack>
    </Paper>
  );
};

export default NavBar;
