import React from "react";
import styled, { keyframes } from "styled-components";
import Wave from "../../images/Wave.png";
import Surfer from "../../images/Surfer.png";
import { Link } from "react-router-dom";
import { Github } from "@styled-icons/boxicons-logos/Github";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #3fbed3;
  height: 100px;
  /* padding-left: 30px;
  padding-right: 30px; */
  display: flex;
  align-items: stretch;
`;

const FooterItem = styled.div`
  margin-top: 20px;
  flex: 1 1 0;
  /* border: 1px solid red; */
  text-align: center;
  @media screen and (max-width:600px) {
        font-size: 0.6rem;
    }
`;

const WaveImg = styled.img`
  width: 100%;
  height: 100px;
  position: relative;
`;

const move = keyframes`
0%{
  bottom: 20px;
  right: 170px;
}
20%{
  bottom: 0px;
  right: 120px;
}
40%{
  bottom: 10px;
  right: 140px;
}
60%{
  bottom: -10px;
  right: 100px;
}
80%{
  bottom: 10px;
  right: 130px;
}
100%{
  bottom: 20px;
  right: 170px;
}
`;

const SurferImg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 0px;
  right: 170px;
  margin-right: 20px;
  z-index: 1;
  transition: 1s;
  animation: ${move} 7s 2s infinite;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  width: 100%;
  position:fixed;
  z-index: 1;
  .footer-images {
    position: relative;
    top: 5px;
  }
`;

const GithubIcon = styled(Github)`
  width: 25px;
  color: black;
  position: relative;
  top: -2px;
  left: 0;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="footer-images">
          <SurferImg src={Surfer} />
          <WaveImg src={Wave} />
        </div>
        <FooterContainer>
          <FooterItem>
            <Link to="https://github.com/codestates-seb/seb42_main_007">
              <GithubIcon /> 5i5와 E ↙
            </Link>
          </FooterItem>
          <FooterItem>copyright Ⓒ Was'Surf?</FooterItem>
          <FooterItem>
            FE 송민주 조한준 최산애 <br />
            BE 박다솜 이언용 정민우
          </FooterItem>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
