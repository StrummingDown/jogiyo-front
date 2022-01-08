import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  const getToken = async () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      const login = localStorage.getItem("login");
      if (login === "kakao") {
        const { data } = await axios.post(`http://localhost:4000/kakao`, {
          code,
        });
      } else if (login === "git") {
        const { data } = await axios.post(`http://localhost:4000/github`, {
          code,
        });
      } else if (login === "google") {
        const { data } = await axios.post("http://localhost:4000/google", {
          code,
        });
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return <div>Home</div>;
};

export default Home;
