import React from "react";
import styled from "styled-components";
import Message from "../components/Message";
const Container = styled.div`
  margin-top: 100px;

  width: 100%;
  height: 200px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Chat = () => {
  return (
    <Container>
      <Message />
      <Message />
    </Container>
  );
};

export default Chat;
