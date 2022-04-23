import {
  Box,
  Drawer,
  Divider,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { InboxOutlined, MailOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

const Sidebar = () => {

  const { sidemenuOpen,closeSideMenu } = useContext(UIContext);
  
  return (
    /* anchor es la posicion */
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      {/* un box es como un div,nada más */}
      <Box sx={{ width: "250px", }} >
        
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Box>
      
    </Drawer>
  );
};

export default Sidebar;
