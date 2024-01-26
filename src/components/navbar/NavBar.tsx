import {
  Box,
  Paper,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { APP_TITLE } from "../../constants/strings";
import { useNavigate } from "react-router-dom";
import ProfileButton from "../auth/ProfileButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";
import SettingsButton from "./settings/SettingsButton";
import SettingsDialog from "./settings/SettingsDialog";
import useDialogStore from "../../stores/dialogStore";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

interface NavBarProps {
  hasBottomBorder?: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = ({}: NavBarProps) => {
  const matches = useMediaQuery("(min-width:600px)");
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { isSettingsOpen, setSettingsOpen } = useDialogStore();

  return (
    <>
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
            <ProfileButton size={matches ? "large" : "small"} />
          ) : (
            <LoginButton size={matches ? "large" : "small"} />
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
          <SettingsButton size={matches ? "large" : "small"} />
        </Stack>
      </Paper>
      <SettingsDialog
        open={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
        TransitionComponent={Transition}
      />
    </>
  );
};

export default NavBar;
