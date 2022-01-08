import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
