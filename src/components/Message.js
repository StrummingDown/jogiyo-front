import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0px;

  height: 80px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 450px;
  } ;
`;

const Profile = styled.img`
  max-width: 80px;
  max-height: 80px;
  width: 100%;
  height: 100%;
`;
const Div = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div``;
const Day = styled.div``;

const Contents = styled.div`
  max-width: 1200px;
`;

const Message = () => {
  return (
    <Container>
      <Profile src="https://play-lh.googleusercontent.com/Lwf7wsenpoSoKi49pPDGm01H8UY-NvznoM99DzzrmCDn1QIS-klLRqIw4GeFV6lbz1g" />
      <Div>
        <Upper>
          <Name>머규</Name>
          <Day>오후 9시 20분</Day>
        </Upper>
        <Contents>맥주 좋아하세요?</Contents>
      </Div>
    </Container>
  );
};

export default Message;
