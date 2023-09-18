import React from "react";
import { Box, Card, alpha, Stack } from "@mui/material";
import { FormProvider, FTextField } from "../../components/form";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { editComment } from "./commentSlice";

const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required")
});

const defaultValues = {
  content: "",
  image: null
};

function CommentEditForm({ commentId, postId }) {
  const { isLoading } = useSelector((state) => state.post);

  const methods = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const dispatch = useDispatch();

  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     if (file) {
  //       setValue(
  //         "image",
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file)
  //         })
  //       );
  //     }
  //   },
  //   [setValue]
  // );


  const onSubmit = (data) => {
    console.log(`${commentId}`);
    console.log(`${postId}`);
    dispatch(editComment({ ...data, commentId, postId }));
  };

  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FTextField
            name="content"
            multiline
            fullWidth
            rows={4}
            // placeholder={post.content}
            sx={{
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: alpha("#919EAB", 0.32)
              }
            }}
          />

          {/* <FUploadImage
            name="image"
            accept="image/*"
            maxSize={3145728}
            onDrop={handleDrop}
          /> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end"
            }}>
            <LoadingButton
              type="submit"
              variant="contained"
              size="small"
              loading={isSubmitting || isLoading}>
              Post
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </Card>
  );
}

export default CommentEditForm;
