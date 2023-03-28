import './Mypage.css'
import unnamed from "../../images/unnamed.jpg"
import { Link, Route, Routes } from 'react-router-dom';
import { MyLessons, MyPosts, MyAppliedLessons } from './MyComponents';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';

function Mypage() {

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const navigate = useNavigate(); // useNavigate 인스턴스 생성
  
  const handleLogout = async () => {
    try {
      // 1. 백엔드 API를 호출하여 토큰 무효화하기
      const response = await fetch('http://43.201.167.13:8080/members/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('accessToken','refreshToken')}`, // 저장된 토큰 가져오기
        },
      });
  
      if (!response.data['data']['accessToken']) {
        throw new Error('Failed to log out');
      }
  
      // 2. 쿠키 삭제하기
      Cookies.remove('accessToken','refreshToken');
  
      // 3. 상태 업데이트하기
      setIsLoggedOut(true);
  
      // 4. 홈화면으로 이동하기
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  function getDisplayName() {
    return fetch('http://43.201.167.13:8080/members/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('accessToken')}`, // 올바른 토큰 값 사용
      },
    })

    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to get display name');
      }

      return response.json();
    })
    .then((data) => {
      return data['data']['displayName'];
    })
    .catch((error) => {
      console.error(error);
    });
}
const [displayName, setDisplayName] = useState('');

useEffect(() => {
  getDisplayName().then((displayName) => {
    setDisplayName(displayName);
  });
}, []);


  const handleDeleteAccount = async () => {
    try {
      // 1. 백엔드 API를 호출하여 회원정보 삭제하기
      const response = await fetch('http://43.201.167.13:8080/members/1', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('accessToken','refreshToken')}`, // 저장된 토큰 가져오기
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete account');
      }
  
      // 2. 쿠키 삭제하기
      Cookies.remove('accessToken','refreshToken');
  
      // 3. 상태 업데이트하기
      setIsDeleting(false);
      setIsLoggedOut(true);
  
      // 4. 홈화면으로 이동하기

    } catch (error) {
      console.error(error);
    }
  };
  
  if (isLoggedOut) {
    return <div>Logged out successfully!</div>;
  }
  
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
      <div class="Mypagecontainer">
        <div class="commonMypage">
          <section class="commonmypagese">
          <h1 class="commonmypagelink">
              <Link to="/Mypage" class="link" ><p>My Page</p></Link>
            </h1>
            <div class="commonmypagelogout">
              <button
                className="Linkout"
                onClick={handleLogout}>
                로그아웃
              </button>
            </div>
            <div class="commonmypageprofil">
              <img src={unnamed} class="profileimage" alt="프로필 이미지가 없습니다" />
              <div className="imgside">
                <strong>
                  환영합니다 {displayName}님!
                </strong>
              </div>
              <div class="commonmypagesupday">
                <span>"가입일 : " "2016.02.09"</span>
              </div>
            </div>
          </section>
          <nav class="commonmypageleftnav">
            <h2 class="commonmypagembm">
              Mypage Navigation Menus
            </h2>
            <div className="Mylist">
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                나의 프로필</h3>
              <p class="edit1">※ 프로필 수정하기</p>
              <p>
                <button onClick={() => {setSelectedMenu('appliedLessons')}}>※ 나의 강습 정보 보기</button>
              </p>
              <p>
                <button onClick={() => {setSelectedMenu('myPosts')}}>※ 나의 게시글 보기</button>
              </p>
              <p>※ 1:1 문의 하기</p>
              <button
                className="xmembers"
                onClick={() => setIsDeleting(true)}
              >
                <p>
                  ※ 회원탈퇴
                </p>
              </button>
            </div>
          </nav>
          <div className="commonmypagerightcontent">
            {selectedMenu === 'appliedLessons' && <MyAppliedLessons />}
            {selectedMenu === 'myPosts' && <MyPosts />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Mypage;