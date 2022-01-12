import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ScrollSection } from "../components/ScrollSection";

const Core = () => {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          border: "1px solid blue",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flex: 1 }}>
            <h1>This is core 1</h1>
          </div>

          <div style={{ display: "flex", flex: 1 }}>
            <img src="https://picsum.photos/400" />
          </div>
        </div>
      </div>
    </div>
  );
};

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
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return <Core />;
};

export default Home;
