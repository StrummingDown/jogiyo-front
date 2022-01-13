import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "./Header";
import Globalstyle from "./Globalstyle";
import Mypage from "../pages/Mypage";

const Routers = () => (
  <BrowserRouter>
    <Globalstyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
