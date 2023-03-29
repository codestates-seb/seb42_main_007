import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MyPageNew = () => {
  const [photoUrl, setPhotoUrl] = useState("https://i.pravatar.cc/170");

  return (
    <>
      <Header />
      <MypageWrapper>
        <MypageHeader>
          <div>
            <h1>🏄 마이페이지</h1>
          </div>
          <LogoutButton>로그아웃</LogoutButton>
        </MypageHeader>
        <ProfileContainer>
          <div className="profile-wrapper">
            <ProfilePicture photoUrl={photoUrl} />
            <div className="text">
              <div className="welcome-message">환영합니다!</div>
              <div className="display-name">displayName 님</div>
            </div>
          </div>
        </ProfileContainer>
        <div className="Sidebar-body-wrapper">
          <SidebarContainer>
            <div className="my-information">
              <SidebarMenu className="class-registration-information">
                나의 작성글 보기
              </SidebarMenu>
              <SidebarMenu className="my-board-posts">
                나의 강습정보 보기
              </SidebarMenu>
            </div>
            <QuitButton>회원탈퇴</QuitButton>
          </SidebarContainer>
          <BodyContainer>
            <h1>원하는 기능을 구현해보세요.</h1>
          </BodyContainer>
        </div>
      </MypageWrapper>
      <Footer />
    </>
  );
};

const SidebarMenu = styled.div`
  min-width: 220px;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
  background-color: #80dee8;
  text-align: center;
  align-items: center;
  line-height: 50px;
  margin-bottom: 20px;

  :visited {
    background-color: #2699ac;
    color: white;
    transition: 0.3s;
  }
  :hover {
    background-color: #2699ac;
    color: white;
    transition: 0.3s;
  }
`;

const SidebarContainer = styled.div`
  /* border: 3px #80dee8 solid; */
  border-radius: 30px;
  min-height: 700px;
  width: 200px;
  margin-right: 50px;
  flex: 1 1 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  border: 3px #80dee8 solid;
  border-radius: 30px;
  min-height: 700px;
  height: fit-content;
  min-width: 200px;
  flex: 3 1 0;
`;

const MypageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  /* border: 1px red solid; */
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .Sidebar-body-wrapper {
    display: flex;
    flex-direction: row;
    width: 70%;
    /* border: 1px red solid; */
    min-height: fit-content;
    margin-bottom: 80px;
  }
`;

const QuitButton = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  background-color: #3fbed3;
  text-align: center;
  border: transparent;
  border-radius: 15px;
  font-size: 12px;
  margin-bottom: 30px;
  :hover {
    background-color: #2699ac;
    transition: 0.3s;
  }
`;

const LogoutButton = styled.button`
  width: 90px;
  height: 35px;
  color: white;
  background-color: #3fbed3;
  text-align: center;
  border: transparent;
  border-radius: 15px;
  :hover {
    background-color: #2699ac;
    transition: 0.3s;
  }
`;

const MypageHeader = styled.div`
  width: 70%;
  height: 100px;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px red solid; */
  h1 {
    font-size: 35px;
  }
`;

const ProfileContainer = styled.div`
  width: 70%;
  min-height: 250px;
  border: 3px #80dee8 solid;
  margin: 50px;
  margin-bottom: 50px;
  margin-top: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  .profile-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .text {
    text-align: right;
    font-size: 30px;
    margin: 20px;
  }
  .text > div {
    margin: 10px;
  }
  .welcome-message {
    font-size: 36px;
  }
`;

const ProfilePicture = styled.div`
  background-image: url(https://i.pravatar.cc/150?u=memberId);
  width: 170px;
  height: 170px;
  border-radius: 100px;
  /* @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  } */
`;
export default MyPageNew;
