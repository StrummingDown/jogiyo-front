import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  const kakao = async () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if (code) {
      const {
        data: { accessToken },
      } = await axios.post(`http://localhost:4000/kakao`, {
        code,
      });
    }
  };
  useEffect(() => {
    kakao();
  }, []);
  return <div>Home</div>;
};

export default Home;
