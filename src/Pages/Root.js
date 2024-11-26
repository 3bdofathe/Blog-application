import { Outlet } from "react-router-dom";
import Drawerr from "../components/Drawerr";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const drawerWidth = 280;

export default function Root() {
  // toggle drawer
  const [noneOrBlock, setNoneOrBlock] = useState("none");
  const [chVariant, setChVariant] = useState("permanent");
  return (
    <div>
      <Drawerr
        drawerWidth={drawerWidth}
        noneOrBlock={noneOrBlock}
        chVariant={chVariant}
        setNoneOrBlock={setNoneOrBlock}
        setChVariant={setChVariant}
      />



      <Box
        className="outlet"
        sx={{ ml: { xs: "15px", lg: `${drawerWidth}px` } }}
      >
        <IconButton
          sx={{ display: { lg: "none" }, position:'absolute',  top:"70px", left: '30px'}}
          onClick={() => {
            setChVariant("temporary");
            setNoneOrBlock("block");
          }}
        >
          <Menu />
        </IconButton>

        <Outlet />
      </Box>
    </div>
  );
}
