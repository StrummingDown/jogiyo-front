import React from "react";
import styled from "styled-components";
import userPhoto from "../img/userPhoto.png";
const AllContainer = styled.div`
  display: flex;
  padding: 70px 0 0 50px;
  width: 100%;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  background-color: white;
  color: black;
  font-family: "Gaegu", cursive;
  padding: 0 20px;
  width: 50vw;
  height: 80vw;
  @media (max-width: 750px) {
    width: 700px;
  }
`;
const ChatList = styled.div`
  display: flex;

  flex-direction: column;
  margin-left: 80px;
`;
const ScrollBox = styled.div`
  height: 600px; // 임의로 설정해주시면됩니다.
  overflow-x: hidden;
  overflow-y: auto;
  width: 500px;
`;
const FriendColum = styled.div`
  background-color: lavender;
  display: flex;
  width: 100%;
  margin: 3px 0;
`;
const UserImg = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 70%;
  box-shadow: 2px 2px 2px #000;
  margin: 5px 20px 5px 20px;
`;
const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin-left: 20px;
`;
const FriendName = styled.span`
  margin: 0 0 10px 0;
  font-weight: bold;
  font-size: 18px;
`;
const FriendIntro = styled.span`
  font-size: 14px;
`;
const Title = styled.h2`
  padding: 20px 0 10px 10px;
  font-size: 30px;

  i {
    margin-left: 10px;
  }
`;

const Like = () => {
  return (
    <AllContainer>
      <Container>
        <ChatList>
          <Title>
            내가 콕 찌른 사람
            <i class="far fa-heart" />
          </Title>
          <ScrollBox>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
          </ScrollBox>
        </ChatList>
      </Container>
      <Container>
        <ChatList>
          <Title>
            내가 콕 찌른 사람
            <i class="far fa-heart" />
          </Title>
          <ScrollBox>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
            <FriendColum>
              <UserImg src={userPhoto} />
              <UserContent>
                <FriendName> 김덕배</FriendName>
                <FriendIntro> 안전 안전 안전</FriendIntro>
              </UserContent>
            </FriendColum>
          </ScrollBox>
        </ChatList>
      </Container>
    </AllContainer>
  );
};
export default Like;
