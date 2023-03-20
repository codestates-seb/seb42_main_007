import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wassurf_white from "../../images/Wassurf_white.png"
import Logo_black from "../../images/Logo_black.png"
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline"

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #3FBED3;
    height: 130px;
    padding-left: 10px;
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    `

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        display: flex;
        list-style: none;
        padding-left: 0;
    }
`
const LogoImage = styled.img`
    height: 50px;
    margin-left: 15px;
    /* cursor: pointer; */
`

const MenuIcon = styled(MenuOutline)`
    color: white;
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

const HeaderDropdown = props => {

    return (
        <>
        <HeaderContainer>
        <Link to="/">
            <LogoImage src={Logo_black} />
            <LogoImage src={Wassurf_white} /></Link>
        <MenuContainer>
       <ul className="dropdown-menu">
            <li><Link to="/">서핑스팟 찾기</Link></li>
            <li><Link to="/List">커뮤니티</Link></li>
            <li><Link to="/classlist">강습 예약</Link></li>
            <li><Link to="/classlist">로그인</Link></li>
       </ul>
       </MenuContainer>
       <MenuIcon />
       </HeaderContainer>
       </>
    )
}

export default HeaderDropdown;