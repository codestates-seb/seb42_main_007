import React from "react";
import styled from "styled-components";
import Wassurf_white from "../../images/Wassurf_white.png"
import { Menu } from "@styled-icons/ionicons-solid/Menu"
import { Link } from 'react-router-dom';


const HeaderContainer = styled.div`
    width: 100%;
    background-color: #3FBED3;
    height: 100px;
    padding-left: 30px;
    display: flex;
    position: fixed;
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
        height: 100%;
        min-width: 550px;
        max-width: 800px;
        margin: 0;
        padding: 0;
        padding-right: 30px;
    }
`
const LogoImage = styled.img`
    height: 50px;
    /* cursor: pointer; */
`

const MenuIcon = styled(Menu)`
    height: 30px;
    width: 30px;
    color: white;
    margin-left: 20px;
    /* border: solid red 1px; */
    display: none;
`
const MenuItems = styled.div`
    display: flex;
    position: sticky;
    /* border: solid red 1px; */
    flex-wrap: nowrap;
    min-width: fit-content;
`

const MenuItem = styled.div`
    width: fit-content;
    margin-left: 40px;
    color: white;
`

const ButtonContainer = styled.div`
    width: fit-content;
    margin-left: 40px;
    position: sticky;
    /* border: solid red 1px; */
    display: flex;
    flex-wrap: nowrap;
`

const LoginButton = styled.button`
    margin-right: 10px;
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
`

const SignupButton = styled.button`
    height: 30px;
    margin-right: 15px;
    height: 30px;
    width: 75px;
    background-color: transparent;
    border: white 2px solid;
    color: white;
    border-radius: 7px;
    :hover {
        border: black 2px solid;
        color: black;
        font-weight: bold;
    }
`

const Header = () => {

    return (
        <>
        <HeaderContainer>
            <Link to="/">
            <LogoImage src={Wassurf_white} /></Link>
            <div className="header-wrapper">
            <MenuItems>
            <MenuItem>🌊 서핑스팟 찾기</MenuItem>
            {/* <MenuItem>😎 커뮤니티</MenuItem> */}
            <MenuItem><Link to="/List">😎 커뮤니티</Link></MenuItem>
            <MenuItem><Link to="/Detail">😎 상세</Link></MenuItem>
            <MenuItem><Link to="/Ask">😎 작성</Link></MenuItem>
            <MenuItem><Link to="/Edit">😎 수정</Link></MenuItem>
            <MenuItem>🏄‍♀️ 강습예약</MenuItem></MenuItems>
            <ButtonContainer>
            <LoginButton><Link to="/Login">로그인</Link></LoginButton>
            <SignupButton>회원가입</SignupButton>
            </ButtonContainer>
            <MenuIcon />
            </div>
        </HeaderContainer>
        </>
    )
}

export default Header;
