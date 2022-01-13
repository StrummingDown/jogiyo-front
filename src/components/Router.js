import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "./Header";
import Globalstyle from "./Globalstyle";
import Chatroom from "../pages/Chatroom";
import Chatting from "./Chatting";

const Routers = () => (
  <BrowserRouter>
    <Globalstyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatroom" element={<Chatroom />} />
      <Route path="/chatroom/:id" element={<Chatting />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
