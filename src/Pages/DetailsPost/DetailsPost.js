import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./styleOfDetails.css";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { AccessAlarm, InterpreterMode } from "@mui/icons-material";

export default function DetailsPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        // get posts from jsonplaceholder
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const postData = await postResponse.json();
        setPost(postData);


        // get comments from jsonplaceholder
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPostAndComments();
  }, [id]);
  
  if (error) return <p>{error}</p>;
  if (!post) return;

  return (
    <div>
      <Box className="real">
        <Box className="head">
          <Avatar sx={{ bgcolor: deepOrange[500] }} alt="abdo"></Avatar>
          <Typography
            sx={{ fontSize: "1rem", fontWeight: "bold", ml: 2 }}
            variant="body1"
          >
            James Carter
          </Typography>
          <Box flexGrow={1} />
          <Typography
            sx={{
              display: { xs: "none", sm: " flex" },
              alignItems: "center",
              color: "gray",
            }}
            variant="body1"
          >
            <AccessAlarm sx={{ mr: 1 }} /> 30 mins ago
          </Typography>
        </Box>

        <Box className="body">
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
              fontWeight: "bold",
              mt: 4,
              textTransform: "capitalize",
              color: "#212121",
            }}
            variant="body1"
          >
            {post.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              fontWeight: "500",
              mt: 1,
            }}
            variant="body1"
          >
            {post.body}
          </Typography>
        </Box>

            {/* insart a map to get all comments */}
        {comments.map((item) => {
          return (
            <Box key={item} className="comment">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    ml: 1,
                    textTransform: "capitalize",
                  }}
                  variant="body1"
                >
                  {item.name}
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    mt: 2,
                    color: "black",
                  }}
                  variant="body1"
                >
                  {item.body}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "gray",
                    mr: 3,
                  }}
                >
                  <AccessAlarm sx={{ mr: 1 }} /> 10 mins
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", color: "gray" }}
                >
                  <InterpreterMode sx={{ mr: 1 }} /> 3 Votes
                </Typography>
              </Box>
            </Box>
          );
        })}


        {/* link to back to home */}
        <Link to={"/"}>
          <Button
            sx={{
              mt: 3,
              fontSize: "1rem",
              fontWeight: "bold",
              width: "120px",
              color: "black",
              border: "1px solid black",
              transition:'.4s',
              ":hover":{
                backgroundColor:'gray',
                color:'white',
                border: 'none'
              }
            }}
            variant="outlined"
          >
            Back
          </Button>
        </Link>
      </Box>
    </div>
  );
}
