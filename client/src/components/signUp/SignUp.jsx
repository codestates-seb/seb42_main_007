/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { REDIRECT_URI } from '../Apiurl';
import Logo_black from "../../images/Logo_black.png"
import React from "react";


function SignUp() {
  // eslint-disable-next-line no-unused-vars
  const [displayName, setdisplayName] = useState('');
  const [Email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isemail, setIsemail] = useState(false);
  const [Password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const API_URL = `${REDIRECT_URI}members`;
  const navigate = useNavigate();
  // axios.defaults.withCredentials = true;

  const submit = async () => {
    event.preventDefault();
    await axios
      .post(API_URL, {
        displayName: displayName,
        email: Email,
        password: Password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((res) => {
        if (isemail && isPassword) {
          alert('가입에 성공하셨습니다.');
          navigate('/login');
        }
      });
  };
  const userCreate = () => {
    if (isemail && isPassword) alert('성공');
    navigate('/login');
  };
  console.log('이메일' + isemail);
  console.log('패스워드' + isPassword);

  const onNameHandler = (event) => {
    setdisplayName(event.currentTarget.value);
  };

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent) && emailCurrent.length > 1) {
      setEmailMessage(`${e.target.value} 는 유효한 이메일 주소가 아닙니다.`);
      setIsemail(false);
    } else {
      setEmailMessage('');
      setIsemail(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent) && passwordCurrent.length > 1) {
      setPasswordMessage('특수문자와 숫자를 조합해주세요.');
      setIsPassword(false);
    } else if (passwordCurrent.length > 8) {
      setPasswordMessage('this password is available.');
      setIsPassword(true);
    }
  }, []);

  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === Password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 재확인이 일치하면 폼을 제출하는 로직
    if (Password === confirmPassword) {
      console.log('비밀번호 재확인 성공!');
    } else {
      console.log('비밀번호 재확인 실패!');
    }
  };

  return (

    <div className="body">
      <div className="containerFlex">
        <div className="signBody">
          <p className="signupheader"><img src={Logo_black} alt="logo" /></p>
          <div id="formContainer" className="loginContainer">
            <form
              id="login-form"
              className="loginForm"
              // onSubmit=
              // action="https://67d1-125-247-122-218.jp.ngrok.io/users"
              // method="POST"
            >
              <input
                type="hidden"
                name="fkey"
                defaultValue="e0564dc8a6877b58040cd016376500ff43dc58916b6c5550550771d9dd7ac649"
              />
              <input type="hidden" name="ssrc" defaultValue="head" />
              <input type="hidden" name="legalLinksShown" defaultValue={1} />
              <div className="authItem">
                <label className="flexItemLabel" htmlFor="displayName">
                  닉네임
                </label>
                <div className="flexRelative">
                  <input
                    placeholder="닉네임을 입력해 주세요."
                    className="flex--item si-input"
                    type="text"
                    onChange={onNameHandler}
                    name="displayName"
                    id="displayName"
                    data-is-teams="false"
                  />
                </div>
                <p className="flex--item si-input-message js-error-message d-none"></p>
              </div>
              <div className="authItem">
                <label className="flexItemLabel" htmlFor="email">
                  이메일
                </label>
                <div className="flexRelative">
                  <input
                    placeholder="이메일을 입력해 주세요."
                    className="si-input"
                    id="email"
                    type="email"
                    onChange={onChangeEmail}
                    size={30}
                    maxLength={100}
                    name="email"
                  />
                </div>
                {/* <p className="inputMessage">{emailMessage}</p> */}
              </div>
              <label className="flexItemLabel" htmlFor="password">
                비밀번호
              </label>
              <div className="authItem">
                <p className="flex--item si-input-message js-error-message d-none"></p>

                <div className="flexRelative">
                  <input
                    placeholder="비밀번호를 입력해 주세요."
                    className="flex--item si-input"
                    type="password"
                    autoComplete="off"
                    // onChange={onChangePassword}
                    name="password"
                    id="password"
                    value={Password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {/* <p className="fs-caption fc-light mt4 mb4">{passwordMessage}</p> */}
                <div className="d-flex ai-center ps-relative jc-space-between"></div>
              </div>
              <label className="flexItemLabel" htmlFor="confirm-password">
                비밀번호 확인
              </label>
              <div className="authItem">
                <p className="flex--item si-input-message js-error-message d-none"></p>

                <div className="flexRelative" htmlFor="password">
                <input
                placeholder="비밀번호를 확인해 주세요."
                className="flex--item si-input"
                type="password"
                id="confirm-password" 
                value={confirmPassword} 
                onChange={handleConfirmPasswordChange} />
                </div>
                {!passwordMatch && <p style={{ color: 'red' } }>비밀번호가 일치하지 않습니다.</p>}
                {/* <p className="fs-caption fc-light mt4 mb4">{passwordMessage}</p> */}
                <div className="d-flex ai-center ps-relative jc-space-between"></div>
              </div>
              <div className="d-flex flex__center bg-black-050 ba bc-black-075 bar-sm pt8 pb2">
                {/* <div id="no-captcha-here">
                  <div style={{ width: '164px', height: '144px' }}>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: '250px',
                        height: '40px',
                        border: '1px solid rgb(193, 193, 193)',
                        margin: '10px 25px',
                        padding: '0px',
                        resize: 'none',
                        display: 'none',
                      }}
                      defaultValue={''}
                    />
                  </div>
                </div>
                <script></script> */}
                
                <div className="js-auth-item">
                  <div className="js-catpcha-error-container">
                    <p className="s-input-message m0 p0 js-error-message" />
                  </div>
                </div>
              </div>
              <div className="d-flex gs4 gsy fd-column js-auth-item ">
                <div className="butflex">
                  <button
                    className="signUpBtn"
                    // {isDisabled ? 'signUpbtnNone' : 'signUpBtn'}
                    id="submit-button"
                    name="submit-button"
                    onClick={submit}
                  >
                    회원가입
                  </button>
                  {/* <button
                    className="googlesignUpBtn"
                    // {isDisabled ? 'signUpbtnNone' : 'signUpBtn'}
                    id="submit-button"
                    name="submit-button"
                    // onClick={submit}
                  >
                    구글 회원가입
                  </button> */}
                </div>
                <p className="flex--item s-input-message js-error-message d-none"></p>
              </div>
              <input type="hidden" id="oauth_version" name="oauth_version" />
              <input type="hidden" id="oauth_server" name="oauth_server" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
