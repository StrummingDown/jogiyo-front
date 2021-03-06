import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import styled from "styled-components";

const LogoForm = styled.div`
  margin: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Logo = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
`;

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
  const navigate = useNavigate();
  const kakao = async () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    console.log('카카오코드읽기성공',code)
    const {data:{id,nickname}} = await axios.post(`http://localhost:4000/kakao`,{
      code
    })
    if(id){
       navigate('/home')
    } 
    
    
  };

  useEffect(() => {
    kakao();
    console.log('useEffect작종')
  }, []);




  return (
    <div>
      <LogoForm>
        <Logo src="https://play-lh.googleusercontent.com/Lwf7wsenpoSoKi49pPDGm01H8UY-NvznoM99DzzrmCDn1QIS-klLRqIw4GeFV6lbz1g"></Logo>
      </LogoForm>
      <ButtonForm>
        <Container>
          <Button href="https://kauth.kakao.com/oauth/authorize?client_id=b72151a6abcb9e45c5b06010dc2a3f52&redirect_uri=http://localhost:3000&response_type=code">
            카카오 로그인
          </Button>
          <Button>Google 로그인</Button>
          <Button>Github 로그인</Button>
        </Container>
      </ButtonForm>
    </div>
  );
};

export default Login;
