import './Mypage.css'
import unnamed from "../../images/unnamed.jpg"
import { Link, Route, Routes } from 'react-router-dom';
import { MyLessons, MyPosts, MyAppliedLessons } from './MyComponents';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDisplayName } from '@mui/utils';
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import axios from 'axios';
import MyAvatar from './myAvatar';
import MyList from './MyList';
import Myreservation from './Myreservation';


function Mypage() {

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const navigate = useNavigate(); // useNavigate 인스턴스 생성
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState('my-posts'); // define a state variable for the active menu item
  


      const handleLogout = async (accessToken, refreshToken) => {
        try {
          await axios.post(
            'http://43.201.167.13:8080/members/logout',
            { accessToken, refreshToken },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              
            }
          );
          navigate('/');
          handleClearTokens();
        } catch (err) {
          console.error(err);
        }
      };
    

  // function handleClearTokens() {
  //   localStorage.setItem('accessToken', '');
  //   localStorage.setItem('refreshToken', '');

  // }


  function handleClearTokens() {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    navigate('/');
  }

  useEffect(() => {
    async function fetchDisplayName() {
      try {
        const response = await axios.get('http://43.201.167.13:8080/members',
        {
          headers: {
            Authorization: `Bearer: ${Cookies.get('accessToken')}`, // 저장된 토큰 가져오기
          },
        }); console.log(response.data.displayName)
        setDisplayName(response.data.displayName);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDisplayName();
  }, []);

  const handleDeleteAccount = async () => {
    try {
      // 1. 백엔드 API를 호출하여 회원정보 삭제하기
      const response = await fetch('http://43.201.167.13:8080/members', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${Cookies.get('accessToken','refreshToken')}`, // 저장된 토큰 가져오기
        },
      });
  
      if (!response.ok) {
        localStorage.setItem('accessToken', '');
        localStorage.setItem('refreshToken', '');
        navigate('/');
        throw new Error('Failed to delete account');
      }
  
      // 2. 쿠키 삭제하기
      Cookies.remove('accessToken','refreshToken');
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      navigate('/');
  
      // 3. 상태 업데이트하기
      setIsDeleting(false);
      setIsLoggedOut(true);
  
      // 4. 홈화면으로 이동하기
    } catch (error) {
      console.error(error);
    }
  };

  if (isDeleting) {
    return (
      <div>
        <p>정말 삭제하시겠습니까?</p>
        <button onClick={handleDeleteAccount}>예</button>
        <button onClick={() => setIsDeleting(false)}>아니요</button>
      </div>
    );
  }


  return (
    <>
      <Header />
      <MypageWrapper>
        <MypageHeader>
          <div>
            <h1>🏄 마이페이지</h1>
          </div>
          <LogoutButton onClick={handleLogout}>
            로그아웃
          </LogoutButton>
        </MypageHeader>
        <ProfileContainer>
          <div className="profile-wrapper">
            <MyAvatar />
            <div className="text">
              <div className="welcome-message">환영합니다!</div>
              <div className="display-name">{displayName}님!</div>
            </div>
          </div>
        </ProfileContainer>
        <div className="Sidebar-body-wrapper">
          <SidebarContainer>
            <div className="my-information">
              <SidebarMenu
                className={`class-registration-information ${
                  activeMenu === 'my-posts' ? 'active' : ''
                }`}
                onClick={() => setActiveMenu('my-posts')}
              >
                나의 작성글 보기
              </SidebarMenu>
              <SidebarMenu
                className={`my-board-posts ${
                  activeMenu === 'my-board' ? 'active' : ''
                }`}
                onClick={() => setActiveMenu('my-board')}
              >
                나의 강습정보 보기
              </SidebarMenu>
            </div>
            <QuitButton 
            onClick={handleDeleteAccount}
            >
              회원탈퇴
              </QuitButton>
          </SidebarContainer>
          <BodyContainer>
            {activeMenu === 'my-posts' && <MyList />}
            {activeMenu === 'my-board' && <Myreservation />}
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
    cursor: pointer;
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
  border-radius: 25px 25px 25px 25px;
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

export default Mypage;