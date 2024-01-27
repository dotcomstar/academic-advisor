import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

const SamplePrompts = () => {
  return (
    <Grid item xs={12}>
      <List>
        <ListItemButton key="seewhatotherssay">
          <ListItemText primary="See what others are asking"></ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItemButton key="Remy">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <Stack direction={"column"}>
            <ListItemText primary="What are good extracurriculars?" />
            <ListItemText secondary="- Remy, 16"></ListItemText>
          </Stack>
        </ListItemButton>
        <ListItemButton key="Alice">
          <ListItemIcon>
            <Avatar
              alt="Alice"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </ListItemIcon>
          <Stack direction={"column"}>
            <ListItemText primary="How do I ask for a rec letter?" />
            <ListItemText secondary="- Alice, 18"></ListItemText>
          </Stack>
        </ListItemButton>
        <ListItemButton key="Cindy">
          <ListItemIcon>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemIcon>
          <Stack direction={"column"}>
            <ListItemText primary="I have two competing offers but I need more money to go to my dream school. What should I do?" />
            <ListItemText secondary="- Cindy, 18"></ListItemText>
          </Stack>
        </ListItemButton>
      </List>
    </Grid>
  );
};

export default SamplePrompts;
