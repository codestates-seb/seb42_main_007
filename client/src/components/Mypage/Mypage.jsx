import './Mypage.css'
import unnamed from "../../images/unnamed.jpg"
import { Link } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';


function signUp() {

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
      <Link to="/" className="Linkout">로그아웃</Link>
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
     <p>※ 나의 강습 정보 보기</p>
     <p>※ 나의 게시글 보기</p>
     <p>※ 1:1 문의 하기</p>
     <p>※ 회원탈퇴</p>
    </div>
</nav>
    </div>
    </div>
    </>
);
}
export default signUp;