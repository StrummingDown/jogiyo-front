import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "./Header";
import Globalstyle from "./Globalstyle";

const Routers = () => (
  <BrowserRouter>
    <Globalstyle />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
