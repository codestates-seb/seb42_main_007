import { useEffect, useState } from 'react';
import styled from "styled-components";
import Wassurf_white from "../../images/Wassurf_white.png";
import { Menu } from "@styled-icons/ionicons-solid/Menu";
import { Times } from "@styled-icons/typicons/Times";
import { Link } from "react-router-dom";
import Logo_black from "../../images/Logo_black.png";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: transparent;
  height: 100px;
  padding-left: 0px;
  display: flex;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100px;
        max-width: 800px;
        margin: 0;
        padding: 0;
        padding-right: 30px;
    }
    .header-wrapper > .toggle {
        position: absolute;
    }
    .logo-container {
        display: flex;
        justify-content: center;
        margin-left: 10px;
        min-width: 210px;
        width: fit-content;
        top: 3px;
        position: relative;
    }
    @media screen and (max-width:375px) {
        display: none;
    }

`
const LogoImage = styled.img`
    height: 40px;
    width: fit-content;
    cursor: pointer;
    margin: 5px;
    @media screen and (max-width:375px) {
        display: none;
    }

`
 
const MenuIcon = styled(Menu)`
    height: 30px;
    width: 30px;
    color: white;
    margin-left: 20px;
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
const MenuItems = styled.div`
  display: flex;
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
  }
`;


const ButtonContainer = styled.div`
  width: fit-content;
  margin-left: 40px;
  position: sticky;
  right: 0px;
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


const LandingHeader = () => {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

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
            {/* {isLoggedIn ? (
              <MenuItem>
                <Link to="/mypage">🙋‍♀️ 마이페이지</Link>
              </MenuItem>
            ) : (
              <MenuItem className="hidden">
                <Link to="/Login">💬 로그인</Link>
              </MenuItem>
            )} */}
          </MenuItems>
          <ButtonContainer>
            {isLoggedIn ? (
              <MenuItem>
              <Link to="/mypage">🙋‍♀️ 마이페이지</Link>
            </MenuItem>
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

export default LandingHeader;
