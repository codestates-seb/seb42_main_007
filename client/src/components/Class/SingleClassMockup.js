import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RandomImage from 'react-random-image';
import { imagesUrl } from "./RandomImage";


const SingleClassMockup = () => {
    const [photoUrl, setPhotoUrl] = useState("https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imagesUrl.length);
        setPhotoUrl(imagesUrl[randomIndex]);
      }, []);

    return (
        <>
                <SingleClassContainer>
                <ClassThumbnail photoUrl={`${photoUrl}`}/>
                <ClassTitle>와썹in양양 [타이틀]</ClassTitle>
                <ClassPrice>77,000원</ClassPrice>
                <ClassReservationButton><Link to="/class/1">바로예약 👉</Link></ClassReservationButton>
                </SingleClassContainer>
         </>
    )
}

const SingleClassContainer = styled.div`
    /* border: solid red 1px; */
    min-height: 100%;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-shadow: 0px 0px 7px 0px #CBCBCB;
    margin: 0px 5px;
    z-index: -1;
    .image-container {
  background-image: url(photoUrl);
  background-size: cover;
  background-position: center;
}
`


const ClassThumbnail = styled.div`
    width: 250px;
    height: 250px;
    background-image: url(${props => props.photoUrl});
    background-size: cover;
    background-position: center;

`

const ClassTitle = styled.div`
    font-size: 17px;
    padding: 10px;
    width: 100%;
    text-align: right;
    /* border: 1px red solid; */
`

const ClassPrice = styled.div`
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    /* margin-top: 5px; */
    text-align: right;
    /* border: 1px red solid; */
`

//왼쪽 오른쪽 이동하는 아이콘 2개
const ClassReservationButton = styled.button`
    width: 90px;
    height: 35px;
    color: white;
    background-color: #3FBED3;
    text-align: center;
    border: transparent;
    border-radius: 15px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
`



export default SingleClassMockup;