import React from "react";
import styled from "styled-components";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  padding-top: 70px;
  justify-content: center;
`;
const Alink = styled(Link)`
  all: unset;
  cursor: pointer;
`;
const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Chatroom = () => {
  return (
    <>
      <Div>
        <Container>
          <Alink to="123">
            <Message />
          </Alink>
          <Alink to="123">
            <Message />
          </Alink>
          <Alink to="123">
            <Message />
          </Alink>
          <Alink to="123">
            <Message />
          </Alink>
          <Alink to="123">
            <Message />
          </Alink>
          <Alink to="123">
            <Message />
          </Alink>
        </Container>
      </Div>
    </>
  );
};

export default Chatroom;
