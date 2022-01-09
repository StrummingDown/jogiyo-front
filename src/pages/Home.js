import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  const getToken = async () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      const login = localStorage.getItem("login");
      const {
        data: { token },
      } = await axios.post(`http://localhost:4000/oauth/${login}`, {
        code,
      });
      console.log(token);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return <div>Home</div>;
};

export default Home;
