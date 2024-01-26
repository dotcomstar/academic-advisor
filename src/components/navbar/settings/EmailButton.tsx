import { Link, Stack, Typography } from "@mui/material";
import {
  CONTACT_EMAIL,
  EMAIL_TEXT,
  APP_TITLE,
} from "../../../constants/strings";

interface EmailButtonProps {
  text: string;
}

const EmailButton = ({ text }: EmailButtonProps) => {
  const deviceWidth = window.screen.height;
  const deviceHeight = window.screen.width;
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const darkTheme = localStorage.getItem("theme");

  const screenResolution = `${deviceWidth} x ${deviceHeight}`;
  const viewPortSize = `${vw} x ${vh}`;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const gameData = JSON.stringify({
    theme: darkTheme,
  });

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
    >
      <Typography>{text}</Typography>
      <Link
        href={`mailto:${CONTACT_EMAIL}?subject=${APP_TITLE} ${text}&body=%0D%0A%0D%0A%0A--%0ADevice%20summary%3A%0AScreen%20Resolution%3A%20${screenResolution}%0AViewport%20Size%3A%20${viewPortSize}%0ATimezone%3A%20${timeZone}%0A%0ALocal%20Storage%3A%0A${gameData}`}
        title={`Send ${text} to ${CONTACT_EMAIL}`}
        color={"inherit"}
        target="_blank"
        rel="noopener"
      >
        {EMAIL_TEXT}
      </Link>
    </Stack>
  );
};

export default EmailButton;
