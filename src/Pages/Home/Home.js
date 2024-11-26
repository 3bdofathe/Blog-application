import "./styleOfHome.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { blue, deepOrange, deepPurple, red } from "@mui/material/colors";
import { MoreVert } from "@mui/icons-material";
import { AvatarGroup, Box} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import CommentIcon from '@mui/icons-material/Comment';

export default function Home() {

  // who to get data from jsonplaceholder
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const Posts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      }
      catch (error) {
        setError(error.message);
      }
    };
    Posts();
  }, []);

  // who to filter data on input search
  const filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      {error && <h2>{error}</h2>}

      <Typography
        sx={{ mt: 7, fontSize: "1.6rem", fontWeight: "600", color: "#212121" }}
        variant="body1"
      >
        Your Posts
      </Typography>

      <Grid className="post" container spacing={4}>
        {/* insert a map to get all posts */}
        {filterPosts.map((item) => {
          return (
            <Grid
              key={item.id}
              className="col1"
              size={{ xs: 12, sm: 12, md: 12 }}
              sx={{":hover .MuiPaper-root": {backgroundColor: '#f0f5f9'}}}
            >
              <Card
                sx={{
                  width: "100% ",
                  borderRadius: "15px",
                  p: "30px 30px 20px 30px ",
                }}
              >
                <Box className="posts">
                  <Box className="title">
                    <Box sx={{ mr: 1.5 }}>
                      <Avatar sx={{ bgcolor: red[500] }}></Avatar>
                    </Box>
                    <Box flexGrow={1}>
                      <Typography
                        sx={{
                          fontSize: {xs: '1rem', sm: '1.2rem', md: "1.4rem"},
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                        variant="body1"
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{ fontSize: {xs: '.8rem', sm: "1rem"}, color: "gray", mt: 1 }}
                        variant="body1"
                      >
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="comment">
                    <AvatarGroup max={3} total={5} spacing={"small"}>
                      <Avatar sx={{ bgcolor: blue[500] }} alt="abdo">
                        A
                      </Avatar>
                      <Avatar sx={{ bgcolor: deepPurple[500] }} alt="abdo">
                        A
                      </Avatar>
                      <Avatar sx={{ bgcolor: deepOrange[500] }} alt="abdo">
                        A
                      </Avatar>
                    </AvatarGroup>

                    <Link to={`/details/${item.id}`}>
                      <IconButton sx={{color:'rgba(0, 0, 0, 0.782)'}}>
                        <CommentIcon /><h5 style={{marginLeft:'10px'}}>5</h5>
                      </IconButton>
                    </Link>

                    <IconButton sx={{color:'rgba(0, 0, 0, 0.782)'}}>
                        <MoreVert />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}