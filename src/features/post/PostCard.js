import React from "react";
import {
  Box,
  Link,
  Card,
  Stack,
  Avatar,
  Typography,
  CardHeader,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import { Link as RouterLink, useNavigate} from "react-router-dom";
import { fDate } from "../../utils/formatTime";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostReaction from "./PostReaction";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

function PostCard({ post, postId }) {
  // const { postId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handlePostMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    if (user._id === post.author._id) {
      navigate(`/posts/${postId}/delete`)
    } else {
      toast.error("You can only delete your own post");
    }
  };

  const handleEditPost = () => {
    if (user._id === post.author._id) {
      navigate(`posts/${postId}/edit`);
    } else {
      toast.error("You can only edit your own post");
    }
    console.log("Edit post");
  };

  const menuId = "primary-post-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleDeletePost} sx={{ mx: 1 }}>
        Delete
      </MenuItem>

      <MenuItem
        onClick={handleEditPost}
        // to={`posts/${postId}/edit`}
        // component={RouterLink}
        sx={{ mx: 1 }}
      >
        Edit
      </MenuItem>
    </Menu>
  );
  return (
    <Card>
      <CardHeader
        disableTypography
        avatar={
          <Avatar src={post?.author?.avatarUrl} alt={post?.author?.name} />
        }
        title={
          <Link
            variant="subtitle2"
            color="text.primary"
            component={RouterLink}
            sx={{ fontWeight: 600 }}
            to={`/user/${post.author._id}`}
          >
            {post?.author?.name}
          </Link>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ display: "block", color: "text.secondary" }}
          >
            {fDate(post.createdAt)}
          </Typography>
        }
        action={
          <IconButton>
            <MoreVertIcon sx={{ fontSize: 30 }} onClick={handlePostMenuOpen} />
            {renderMenu}
          </IconButton>
        }
      />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography>{post.content}</Typography>

        {post.image && (
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              height: 300,
              "& img": { objectFit: "cover", width: 1, height: 1 }
            }}
          >
            <img src={post.image} alt="post" />
          </Box>
        )}

        <PostReaction post={post} />
        <CommentList postId={post._id} />
        <CommentForm postId={post._id} />
      </Stack>
    </Card>
  );
}

export default PostCard;
