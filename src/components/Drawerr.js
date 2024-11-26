import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  GridView,
  Leaderboard,
  ModeCommentOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

export default function Drawerr({
  drawerWidth,
  noneOrBlock,
  chVariant,
  setNoneOrBlock,
  setChVariant,
}) {

  const listLinks = [
    
    {
      name: "Messages",
      icon: <ModeCommentOutlined sx={{ color: "#fff" }} />,
    },
    {
      name: "Progress",
      icon: <Leaderboard sx={{ color: "#fff" }} />,
    },
    {
      name: "Settings",
      icon: <SettingsOutlined sx={{ color: "#fff" }} />,
    },
  ];
  return (
    <>
      <Drawer
        sx={{
          // media query
          display: { xs: noneOrBlock, lg: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          ".MuiPaper-root": {
            backgroundColor: "#503e9d",
            border: "none",
          },
        }}
        variant={chVariant}
        anchor="left"
        // ده علشان لما اضغط بره في اي مكان بيقفل تاني
        open={true}
        onClose={() => {
          setNoneOrBlock("none");
          setChVariant("permanent");
        }}
      >
        <Stack
          sx={{ mt: 10, ml: 5 }}
          direction="row"
          spacing={3}
          alignItems={"center"}
        >
          <Avatar
            sx={{ bgcolor: "#6553b2", borderRadius: 2 }}
            variant="rounded"
          >
            E
          </Avatar>
          <Typography
            sx={{ fontSize: "1.2rem", color: "#fff", fontWeight: "600" }}
            variant="body1"
          >
            EduEra
          </Typography>
        </Stack>
        <Toolbar />

        <List sx={{ color: "#fff", pl: 4, mt: 6 }}>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "#fff",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GridView sx={{ color: "brown" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "1.2rem", color: "brown" },
                }}
                primary="Home"
              />
            </ListItemButton>
          </ListItem>

          {listLinks.map((e) => {
            return (
              <ListItem disablePadding sx={{ mt: 1 }}>
                <ListItemButton>
                  <ListItemIcon>{e.icon}</ListItemIcon>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "1.1rem",
                        color: "#fff",
                      },
                    }}
                    primary={e.name}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
