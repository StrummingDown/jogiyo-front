import React from "react";
import styled from "styled-components";
import userPhoto from "../img/userPhoto.png";
const AllContainer = styled.div`
  background-color: white;
  padding: 10px 20px;
  color: black;
  font-family: "Open Sams";
`;
const ChatList = styled.li`
  height: 70px;
`;
const FriendColum = styled.div`
  background-color: #d5c4ff;
`;
const UserImg = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 70%;
  box-shadow: 2px 2px 2px #000;
`;
const UserContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const FriendName = styled.span``;
const FriendChat = styled.span``;

const Like = () => {
  return (
    <div>
      <ChatList />
      <FriendColum>
        <UserImg src={userPhoto} />
        <UserContent>
          <FriendName> 김덕배</FriendName>
          <FriendChat> 아닌데요 뚱인데요.</FriendChat>
        </UserContent>
      </FriendColum>
      <FriendColum>
        <UserImg src={userPhoto} />
        <UserContent>
          <FriendName> 김덕배</FriendName>
          <FriendChat> 아닌데요 뚱인데요.</FriendChat>
        </UserContent>
      </FriendColum>
      <FriendColum>
        <UserImg src={userPhoto} />
        <UserContent>
          <FriendName> 김덕배</FriendName>
          <FriendChat> 아닌데요 뚱인데요.</FriendChat>
        </UserContent>
      </FriendColum>
    </div>
  );
};
export default Like;
