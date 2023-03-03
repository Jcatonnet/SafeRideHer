import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Travel } from "./pages/travel";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
