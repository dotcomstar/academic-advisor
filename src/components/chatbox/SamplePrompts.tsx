import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";

const SamplePrompts = () => {
  return (
    <Grid item xs={12}>
      <List>
        <ListItemButton key="RemySharp">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="John Wick"></ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <Grid item xs={12} style={{ padding: "10px" }}>
        <TextField
          id="outlined-basic-email"
          label="Search"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Divider />
      <List>
        <ListItemButton key="RemySharp">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
          <ListItemText secondary="online"></ListItemText>
        </ListItemButton>
        <ListItemButton key="Alice">
          <ListItemIcon>
            <Avatar
              alt="Alice"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Alice">Alice</ListItemText>
        </ListItemButton>
        <ListItemButton key="CindyBaker">
          <ListItemIcon>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
        </ListItemButton>
      </List>
    </Grid>
  );
};

export default SamplePrompts;
