import {
  Avatar,
  Box,
  InputBase,
  styled,
} from "@mui/material";
import {
  AccountCircleOutlined,
  SearchRounded,
} from "@mui/icons-material";
import ph1 from "../image/abdo.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // border: '1px solid red',
  borderRadius: "20px",
  padding: 2,
  backgroundColor: "#f6f6f5",
  "&:hover": {
    backgroundColor: "#eeeeee",
  },
  marginLeft: 0,
  flexGrow: 1,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header({search,setSearch}) {

  return (
    <Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>

        <Search>
          
          <SearchIconWrapper>
            <SearchRounded />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <AccountCircleOutlined sx={{fontSize:"1.7rem", mr: {xs: 1, sm: 2}, ml: {xs: 2, sm: 5, lg: 12}}} />

        <Avatar alt="Cindy Baker" src={ph1} />
      </Box>
    </Box>
  );
}
