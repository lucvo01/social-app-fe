import * as React from "react";
import { Stack, Typography, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteComment } from "./commentSlice";

function DeleteModal() {
  const { commentId, postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const location = useLocation();

  //   let from = location.state?.backgroundLocation
  //     ? location.state.backgroundLocation
  //     : "/";

  const handleClose = () => {
    navigate(-1);
  };

  const handleClick = () => {
    dispatch(
      deleteComment({
        postId,
        commentId
      })
    );
    handleClose();
  };
  return (
    <Stack>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box>
          <Card>
            <CardContent>
              <Typography variant="subtitle" sx={{ color: "text.secondary" }}>
                Do you want to delete comment?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <Button variant="contained" size="small" onClick={handleClick}>
                  Confirm Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </Stack>
  );
}

export default DeleteModal;
