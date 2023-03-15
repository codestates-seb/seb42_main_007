//class를 모아서 carousel 형식으로 배열한다.
import React from "react";
import styled from "styled-components";

const ClassContainer = styled.div`
    /* border: solid red 1px; */
    width: fit-content;
    min-height: fit-content;
    box-shadow: 0px 0px 7px 0px #CBCBCB;
    margin-left: 5px;
    margin-right: 5px;

`
const SingleClass = styled.div`
    /* border: solid red 1px; */
    min-height: 100%;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const ClassThumbnail = styled.div`
    background-image: url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    background-size: cover;
    background-position: center;
    width: 250px;
    min-height: 250px;
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


const ClassList = () => {
    return (
        <>
        <ClassContainer>
            <SingleClass>
                <ClassThumbnail />
                <ClassTitle>[와쎂 in Yangyang] 양양 서핑 강습 (2시간) 1회권 + 죽도 해변 요트투어 탑승 1회</ClassTitle>
                <ClassPrice>￦75,000 / 1인</ClassPrice>
                <ClassReservationButton>바로예약 👉</ClassReservationButton>
            </SingleClass>
        </ClassContainer>
        </>
    )
}

export default ClassList;