/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import { useDispatch } from 'react-redux';
import './Login.css';
import Logo_black from "../../images/Logo_black.png"

// import { authActions } from '../../Redux/auth';
// import { REDIRECT_URI } from '../Apiurl';

function Login() {
  const [tokenCookie, setTokenCookie] = useCookies(['id']);
  const [refreshCookie, setRefreshCookie] = useCookies(['Refresh']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();
//   const dispatch = useDispatch();

  // // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent) && emailCurrent.length > 8) {
      setEmailMessage('The email is not a valid email address.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);

//   const API_URL = `${REDIRECT_URI}users/login`;

  const passwordhandler = (e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
  };

  const loginHandler = () => {
    axios.defaults.withCredentials = true;
    // const token = tokenCookie.id;

    return axios
      .post(
        // API_URL,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        const accessToken = response.headers.get('Authorization').split(' ')[1];
        const refreshToken = response.headers.get('Refresh');

        setTokenCookie('id', accessToken, {
          maxAge: 60 * 30000,
        });
        setRefreshCookie('Refresh', refreshToken, {
          maxAge: 60 * 30000,
        });
        if (tokenCookie && refreshCookie) {
        //   dispatch(authActions.login());
        }
        navigate(-1);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert('이메일또는 비밀번호를 확인해주세요!');
        }
      });
  };

  return (
    <form>
      <div className="login">
        <div className="content">
          <div className="loginbox">
            <p className= "inbox"><img src={Logo_black} alt="logo" /></p>
            <div className="loginemail">
              <label className="flexItemLabel" htmlFor="display-name">
                이메일
              </label>
              <input
                placeholder="이메일을 입력해 주세요."
                className="s-input"
                id="email"
                type="email"
                size="30"
                maxLength="100"
                name="email"
                // onChange={onChangeEmail}
              ></input>
              {/* <div className="emlerr">{emailMessage}</div> */}
            </div>
            <div className="emailerr"></div>
            <div className="loginpwd">
              <label className="flexItemLabel" htmlFor="display-name">
                비밀번호
              </label>
            <input
              placeholder="비밀번호를 입력해 주세요."
              className="s-input"
              type="password"
              minLength="8"
              maxLength="20"
              required
              autoComplete="off"
              name="password"
              id="password"
              // onChange={passwordhandler}
            ></input>
            </div>
              <div className="loginbtn">
              <button
                className="submit-button"
                id="submit-button"
                name="submit-button"
                type="button"
                value="Log in"
                // onClick={loginHandler}
              >
                로그인
              </button>
              {/* <button
                className="gangsa-button"
                id="gangsa-button"
                name="gangsa-button"
                type="button"
                value="gangsa"
              >
                강사 로그인
              </button> */}
              <button
                className="google-button"
                id="google-button"
                name="google-button"
                type="button"
                value="google"
              >
                구글 로그인
              </button>
              <button
                className="guest-button"
                id="guest-button"
                name="guest-button"
                type="button"
                value="guest"
              >
                게스트 로그인
              </button>
            </div>
            <div className="forgot">
              <p className="forgotid">아이디 찾기</p>
              <p className="forgotpw">비밀번호 찾기</p>
            </div>
            <div className="signupsup">
            <p>회원이 아니신가요 ?</p>
            <Link to="/signup" >
              <p className="sup">
                회원가입
              </p>
            </Link>
          </div>
        </div>
        <div className="text">
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;