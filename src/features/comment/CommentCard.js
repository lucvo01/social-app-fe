import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import { fDate } from "../../utils/formatTime";
import CommentReaction from "./CommentReaction";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CommentCard({ comment, commentId, postId }) {
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

  const handleDeleteComment = () => {
    if (user._id === comment.author._id) {
      navigate(`/${postId}/comments/${commentId}/delete`);
    } else {
      toast.error("You can only delete your own comment");
    }
  };

  const handleEditComment = () => {
    console.log(commentId);
    if (user._id === comment.author._id) {
      navigate(`/${postId}/comments/${commentId}/edit`);
    } else {
      toast.error("You can only edit your own comment");
    }
    console.log("Edit comment");
  };

  const menuId = "primary-comment-menu";

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
      <MenuItem onClick={handleDeleteComment} sx={{ mx: 1 }}>
        Delete
      </MenuItem>

      <MenuItem
        onClick={handleEditComment}
        // to={`posts/${commentId}/edit`}
        // component={RouterLink}
        sx={{ mx: 1 }}
      >
        Edit
      </MenuItem>
    </Menu>
  );
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={comment.author?.name} src={comment.author?.avatarUrl} />
      <Paper sx={{ p: 1.5, flexGrow: 1, bgcolor: "background.neutral" }}>
        <Stack
          direction="row"
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
          sx={{ mb: 0.5 }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {comment.author?.name}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            {fDate(comment.createdAt)}
          </Typography>
          <IconButton>
            <MoreVertIcon sx={{ fontSize: 20 }} onClick={handlePostMenuOpen} />
            {renderMenu}
          </IconButton>
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {comment.content}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CommentReaction comment={comment} />
        </Box>
      </Paper>
    </Stack>
  );
}

export default CommentCard;
