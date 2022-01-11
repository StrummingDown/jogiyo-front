import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "./Header";
import Globalstyle from "./Globalstyle";
import Chat from "../pages/Chat";

const Routers = () => (
  <BrowserRouter>
    <Globalstyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
