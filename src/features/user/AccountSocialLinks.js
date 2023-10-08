import React from "react";

import { Stack, Card, InputAdornment } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { FormProvider, FTextField } from "../../components/form";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "./userSlice";

function AccountSocialLinks() {
  return <div>AccountSocialLinks</div>;
}

export default AccountSocialLinks;
