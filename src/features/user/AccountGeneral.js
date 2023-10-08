import React, { useCallback } from "react";
import { Box, Grid, Card, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useAuth from "../../hooks/useAuth";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, FTextField, FUploadAvatar } from "../../components/form";
import { fData } from "../../utils/numberFormat";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "./userSlice";

function AccountGeneral() {
  return <div>AccountGeneral</div>;
}

export default AccountGeneral;
