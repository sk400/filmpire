import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import { ActorDetailPage, HomePage, MovieDetailPage } from "./pages";

const App = () => {
  return (
    <Box>
      <Layout>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:movieId" element={<MovieDetailPage />} />
            <Route path="/actor/:actorId" element={<ActorDetailPage />} />
          </Routes>
        </Box>
      </Layout>
    </Box>
  );
};

export default App;
