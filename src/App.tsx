import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Travel } from "./pages/travel";
import { LandingPage } from "./LandingPage";

export function App() {
  return (
    <>
      <BrowserRouter>
        {/* <LandingPage /> */}
        <Routes>
          <Route path="/" element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
