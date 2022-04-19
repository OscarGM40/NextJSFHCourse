import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>

        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>

        <Typography variant="h6">OpenJira</Typography>

      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
