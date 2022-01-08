import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #feb3c8;
  height: 70px;
  padding: 0 10px;
  i {
    font-size: 30px;
    cursor: pointer;
    color: #f2f2f2;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  left: 0;
  flex-direction: column;
  top: 0;
`;

const Logo = styled.img`
  width: 90px;
  height: 100%;
`;

const Menu = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FEB3C8;
    align-items: center;
    width: 100%;
	-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

}
    `;

const Lists = styled(Link)`
  padding: 10px;
  font-size: 20px;
`;

const GoHome = styled(Link)`
  height: 100%;
`;

// eslint-disable-next-line
export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Div>
      <Header>
        <GoHome to='/'>
          <Logo src='https://play-lh.googleusercontent.com/Lwf7wsenpoSoKi49pPDGm01H8UY-NvznoM99DzzrmCDn1QIS-klLRqIw4GeFV6lbz1g' />
        </GoHome>
        <i className='fas fa-bars' onClick={openMenuHandler}></i>
      </Header>
      {isOpen ? (
        <Menu isOpen={isOpen}>
          <Lists to='/'>공지사항</Lists>
          <Lists to='/'>서비스소개</Lists>
          <Lists to='/login'>로그인</Lists>
        </Menu>
      ) : null}
    </Div>
  );
};
