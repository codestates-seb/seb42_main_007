import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    background-color: #3FBED3;
    height: 120px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: stretch;
    margin-top: 100px;
    position: relative;
    bottom: 0;
    left: 0;
    /* border: 2px red solid; */
`
 const FooterItem = styled.div`
    margin-top: 20px;
    flex: 1 1 0;

 `

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterItem>우리팀 깃헙 주소</FooterItem>
            <FooterItem>copyright ⓒ</FooterItem>
            <FooterItem>FE 팀원명 <br/>BE 팀원명</FooterItem>
        </FooterContainer>
        </>
    )
}

export default Footer;
