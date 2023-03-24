import './Mypage.css'
import unnamed from "../../images/unnamed.jpg"
import { Link, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';
import { MyLessons, MyPosts } from './MyComponents';
import Cookies from 'js-cookie';
import React, { useState } from 'react';


function Mypage() {

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLogout = async () => {
    try {
      // 1. 백엔드 API를 호출하여 토큰 무효화하기
      const response = await fetch('members/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`, // 저장된 토큰 가져오기
        },
      });

      if (!response.ok) {
        throw new Error('Failed to log out');
      }

      // 2. 쿠키 삭제하기
      Cookies.remove('token');

      // 3. 상태 업데이트하기
      setIsLoggedOut(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // 1. 백엔드 API를 호출하여 회원정보 삭제하기
      const response = await fetch('members/{member-id}', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`, // 저장된 토큰 가져오기
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      // 2. 쿠키 삭제하기
      Cookies.remove('token');

      // 3. 상태 업데이트하기
      setIsDeleting(false);
      setIsLoggedOut(true);
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
    <GlobalStyle /> 
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
    <img src={unnamed} class="profileimage" alt="프로필 이미지가 없습니다"></img>
    <div className ="imgside">
       <strong>
        환영합니다 ooo님 !
       </strong>
       </div>
       <div class="commonmypagesupday">
        <span>
            "가입일 : "
            "2016.02.09"
        </span>
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
        <Link to="/mypage/lessons">※ 나의 강습 정보 보기</Link>
     </p>
     <p>
        <Link to="/mypage/posts">※ 나의 게시글 보기</Link>
     </p>
     <p>※ 1:1 문의 하기</p>
     <button 
     className="xmembers"
     onClick={handleDeleteAccount}
     >
     <p>
      ※ 회원탈퇴
      </p>
      </button>
    </div>
</nav>
<div className="commonmypagerightcontent">
          <Routes>
            <Route path="/mypage/lessons" component={MyLessons} />
            <Route path="/mypage/posts" component={MyPosts} />
          </Routes>
    </div>
    </div>
    </div>
    </>
);
}
export default Mypage;