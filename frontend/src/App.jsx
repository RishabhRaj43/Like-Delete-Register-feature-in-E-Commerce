import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ShowLike from "./Components/ShowLike.jsx";
import Like from "./Components/Like.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster />
      <Routes>
        <Route path="/like" element={<Like />} />
        <Route path="/show" element={<ShowLike />} />
      </Routes>
    </>
  );
}

export default App;
