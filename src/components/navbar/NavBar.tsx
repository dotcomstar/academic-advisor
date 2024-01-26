import { Box, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { APP_TITLE } from "../../constants/strings";
import { useNavigate } from "react-router-dom";
import ProfileButton from "../auth/ProfileButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";

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
        justifyContent="center"
        alignItems="center"
        px="calc(max(3vw,20px))"
      >
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
        {isAuthenticated ? (
          <ProfileButton size="small" />
        ) : (
          <LoginButton size="small" />
        )}
      </Stack>
    </Paper>
  );
};

export default NavBar;