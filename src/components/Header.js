import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logojogiyo.png";

const Container = styled.div`
  width: 100%;
  position: fixed;
  box-shadow: 0 4px 4px -4px #ccb1ef;
`;

const Header = styled.header`
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 70px;
  i {
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    padding: 0 10px;
  }
`;

const Logo = styled.img`
  justify-content: center;
  padding : 100px
  width: 100px;
  height: 45%;
`;

const IconDiv = styled.div`
  /* animation-duration: 2s;
  animation-name: slidein; */
  display: flex;
  justify-content: space-between;
  width: 200px;
  /* @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  } */
`;

const IconLink = styled(Link)`
  i {
    color: ${(props) => (props.isActive ? "#d5c4ff" : "black")};
  }
`;

// eslint-disable-next-line
export default () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <IconDiv>
          <IconLink to="/friends" isActive={pathname === "/friends"}>
            <i className="fas fa-search-plus" />
          </IconLink>
          <IconLink to="/like" isActive={pathname === "/like"}>
            <i className="fas fa-hand-point-up" />
          </IconLink>
          <IconLink to="/chatroom" isActive={pathname === "/chatroom"}>
            <i className="fas fa-comment" />
          </IconLink>
          <IconLink to="/mypage" isActive={pathname === "/mypage"}>
            <i className="fas fa-user" />
          </IconLink>
        </IconDiv>
      </Header>
    </Container>
  );
};
