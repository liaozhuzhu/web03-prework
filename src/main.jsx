import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCreator from "./pages/AddCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Use createRoot instead of render

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/view/:id" element={<ViewCreator />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
