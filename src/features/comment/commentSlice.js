import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    startLoading(state, action) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createCommentSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
    }
  }
});

export const createComment =
  ({ postId, content }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.post("/commment", { postId, content });
      dispatch(slice.actions.createCommentSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };

export default slice.reducer;
