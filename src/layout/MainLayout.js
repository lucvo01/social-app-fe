import React from "react";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGow: 1 }} />
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
