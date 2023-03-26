import React, { useState } from "react";
import styled from "styled-components";
import Wassurf_white from "../../images/Wassurf_white.png";
import { Menu } from "@styled-icons/ionicons-solid/Menu";
import { Times } from "@styled-icons/typicons/Times";
import { Link } from "react-router-dom";
import Logo_black from "../../images/Logo_black.png";

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #3FBED3;
    height: 100px;
    padding-left: 0px;
    display: flex;
    position: sticky;
    margin: 0;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        /* border: solid red 1px; */
        height: 100px;
        /* min-width: 1rem; */
        max-width: 800px;
        margin: 0;
        padding: 0;
        padding-right: 30px;
    }
    .header-wrapper > .toggle {
        position: absolute;
    }
    .logo-container {
        /* border: 1px red solid; */
        display: flex;
        justify-content: center;
        margin-left: 10px;
        min-width: 210px;
        width: fit-content;
        top: 3px;
        position: relative;
    }
    @media screen and (max-width:375px) {
        /* max-height: 30px;
        border: 1px red solid;
        margin-left: 0px;
        position: relative;
        left: -15px; */
        display: none;
    }

`
const LogoImage = styled.img`
    height: 40px;
    width: fit-content;
    cursor: pointer;
    /* border: 1px red solid; */
    margin: 5px;
    @media screen and (max-width:375px) {
        /* max-height: 30px;
        border: 1px red solid;
        margin-left: 0px;
        position: relative;
        left: -15px; */
        display: none;
    }

`
 
const MenuIcon = styled(Menu)`
    height: 30px;
    width: 30px;
    color: white;
    margin-left: 20px;
    /* border: solid red 1px; */
    display: none;
    position: relative;
    transition: 0.5s;
    @media screen and (max-width:768px) {
        display: flex;
        margin-right: 50px;
    }
    @media screen and (max-width:375px) {
        position: relative;
        top: 0px;
        left: 0px;
        background-color: red;
        margin-right: 20px;
    }


`
const TimesIcon = styled(Times)`
    height: 30px;
    width: 30px;
    color: white;
    margin-left: 20px;
    /* border: solid red 1px; */
    display: none;
    @media screen and (max-width:768px) {
        display: flex;
        margin-right: 50px;        
    }
    @media screen and (max-width:375px) {
        position: relative;
        top: 0px;
        left: 0px;
        color: red;
        margin-right: 20px;
    }

`

// const MenuIcon = styled(Menu)`
//   height: 30px;
//   width: 30px;
//   color: white;
//   margin-left: 20px;
//   /* border: solid red 1px; */
//   display: none;
//   position: relative;
//   transition: 0.5s;
//   @media screen and (max-width: 768px) {
//     display: flex;
//     margin-right: 30px;
//   }
// `;
// const TimesIcon = styled(Times)`
//   height: 30px;
//   width: 30px;
//   color: white;
//   margin-left: 20px;
//   /* border: solid red 1px; */
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: flex;
//     margin-right: 30px;
//   }
// `;

const MenuItems = styled.div`
  display: flex;
  /* border: solid red 1px; */
  min-width: fit-content;
  margin-right: -20px;
  margin-left: -20px;
  transition: 0.5s;
  .hidden {
    display: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 100px;
    right: ${(props) => (props.menu === true ? "20px" : "-200px")};
    .hidden {
      display: block;
    }
  } 
`;

const MenuItem = styled.div`
  min-width: fit-content;
  margin-left: 20px;
  color: white;
 
  @media screen and (max-width: 768px) {
    background-color: #80dee8;
    border: 1px #3fbed3 solid;
    width: 170px;
    text-align: left;
    padding: 12px 17px;
    color: black;
    /* border-radius: 20px 0 0 20px; */
    /* text-align: center; */
  }
`;


const ButtonContainer = styled.div`
  width: fit-content;
  margin-left: 40px;
  position: sticky;
  right: 0px;
  /* border: solid red 1px; */
  display: flex;
  flex-wrap: nowrap;
`;

const LoginButton = styled.button`
  height: 30px;
  width: 60px;
  background-color: transparent;
  border: white 2px solid;
  color: white;
  border-radius: 7px;
  :hover {
    border: black 2px solid;
    color: black;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MypageButton = styled.button`
  margin-right: -10px;
  height: 30px;
  width: 60px;
  background-color: transparent;
  border: white 2px solid;
  color: white;
  border-radius: 7px;
  :hover {
    border: black 2px solid;
    color: black;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);
  const isLoggedIn = localStorage.getItem("token"); // 로그인 상태를 나타내는 변수

  return (
    <>
      <HeaderContainer>
        <div className="logo-container">
          <Link to="/">
            <LogoImage src={Logo_black} />
            <LogoImage src={Wassurf_white} />
          </Link>
        </div>
        <div className="header-wrapper">
          <MenuItems menu={menu}>
            <MenuItem>
              <Link to="/Find">🌊 서핑스팟 찾기</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/List">😎 커뮤니티</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/classlist">🏄‍♀️ 강습예약</Link>
            </MenuItem>
            {isLoggedIn ? (
              <MenuItem>
                <Link to="/mypage">🙋‍♀️ 마이페이지</Link>
              </MenuItem>
            ) : (
              <MenuItem className="hidden">
                <Link to="/Login">💬 로그인</Link>
              </MenuItem>
            )}
          </MenuItems>
          <ButtonContainer>
            {isLoggedIn ? (
              <></>
            ) : (
              <LoginButton>
                <Link to="/Login">로그인</Link>
              </LoginButton>
            )}
            <div className="toggle" onClick={() => setMenu(!menu)}>
              {!menu ? <MenuIcon /> : <TimesIcon />}
            </div>
          </ButtonContainer>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
