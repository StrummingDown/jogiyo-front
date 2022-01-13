import React from "react";
import styled from "styled-components";

const ButtonForm = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Button = styled.a`
  all: unset;
  color: black;
  cursor: pointer;
  background-color: rgb(250, 227, 0);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: 0.4s;
  border-radius: 5px;
  &:nth-child(2) {
    background-color: #ef463a;
    color: black;
    &:hover {
      background-color: rgb(239, 70, 58, 0.4);
    }
  }
  &:last-child {
    color: rgb(242, 242, 242);
    background-color: #181516;
    &:hover {
      background-color: rgb(25, 25, 25, 0.4);
    }
  }
  &:hover {
    background-color: rgb(250, 227, 0, 0.4);
  }
`;

const Login = () => {
  return (
    <div>
      <ButtonForm>
        <Container>
          <Button
            href="https://kauth.kakao.com/oauth/authorize?client_id=b72151a6abcb9e45c5b06010dc2a3f52&redirect_uri=http://localhost:3000&response_type=code"
            onClick={() => localStorage.setItem("login", "kakao")}
          >
            카카오 로그인
          </Button>
          <Button
            href="https://accounts.google.com/o/oauth2/v2/auth?client_id=874017862069-ibnrpsv2sjrb3uuvdi5ijja6cloi9255.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email"
            onClick={() => localStorage.setItem("login", "google")}
          >
            Google 로그인
          </Button>
          <Button
            href="https://github.com/login/oauth/authorize?client_id=46fe43a8dc9c1ac97714&scope=user:email"
            onClick={() => localStorage.setItem("login", "github")}
          >
            Github 로그인
          </Button>
        </Container>
      </ButtonForm>
    </div>
  );
};

export default Login;
