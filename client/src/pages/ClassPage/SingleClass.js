import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import RandomImage from 'react-random-image';

const SingleClass = () => {
    const defaultPhotoUrl = 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

    const [data, setData] = useState([]);
    const [photoUrl, setPhotoUrl] = useState(defaultPhotoUrl)
    const [name, setName] = useState('anonymous')

        //시간당 50회 제한
    // const getPhotoUrl = async () => {
    //     axios
    //     .get(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_FETCHPICS_API_KEY}`,
    //     {
    //         headers: {
    //             Authorization: process.env.REACT_APP_FETCHPICS_API_KEY
    //         },
    //         params: {
    //             query: 'surf'
    //         }
    //     })
    //     .then((res) => {
    //         setPhotoUrl(res.data.urls.regular)
    //         setName(res.data.user.name)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
        
    // }
    //카테고리설정이..안됨...
    // const getPhotoUrl = async () => {
    //     axios
    //     .get(`https://random.imagecdn.app/v1/image?width=250&height=250&category=landscape&format=text`)
    //     .then((res) => {
    //         setPhotoUrl(res.data)
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
        
    // }
    const getLessons = async () => {
        axios
          .get(
            `http://43.201.167.13:8080/lesson-class/?page=1&size=10`
          )
          .then((res) => {
            console.log(res.data)
            setData(res.data);
          })
          .catch((err) => {
            console.log(err)
        })

      };

      useEffect(() => {
        getLessons();
        // getPhotoUrl();
      }, [])

    //   {
    //     "memberId": "1",
    //     "lessonClassId": 1,
    //     "title": "강습 클래스 제목",
    //     "content": "강습 클래스 내용",
    //     "registerStart": "2023-03-18T12:20:00",
    //     "registerEnd": "2023-03-20T23:30:00",
    //     "lessonDate": "2023-03-31",
    //     "headCount": 40,
    //     "price": 75000,
    //     "lessonStatus": "현재 강습을 신청할 수 있습니다.",
    //     "lessonRegisters": []
    //   }, ...

    return (
        <>
        {/* {data && data.map((lessondata) => {
            return (
                <div className="lesson-data" key={lessondata.lessonClassId} > 
                <SingleClassContainer>
                <ClassThumbnail src={photoUrl}/>
                <ClassTitle>{lessondata.title}</ClassTitle>
                <ClassPrice>{`${lessondata.price}원`}</ClassPrice>
                <ClassReservationButton><Link to={`/class/${lessondata.lessonClassId}`}>바로예약 👉</Link></ClassReservationButton>
                </SingleClassContainer>
                </div>
                )
        })}  */}        
                {/* <div className="lesson-data" key='1' > 
                <SingleClassContainer>
                <ClassThumbnail src={photoUrl}/>
                <ClassTitle>{data[0] ? data[0].title : '클래스제목'}</ClassTitle>
                <ClassPrice>{data[0] ? `${data[0].price}원` : '77000원'}</ClassPrice>
                <ClassReservationButton><Link to={'/class/1'}>바로예약 👉</Link></ClassReservationButton>
                </SingleClassContainer>
                </div> */}
                
  
                <SingleClassContainer>
                <ClassThumbnail src={photoUrl}/>
                    {/* <div className="copyright">{`Photo by ${name} on `}<Link to="unsplash.com">Unsplash</Link></div> */}
                    <ClassTitle>와썹in양양 [타이틀]</ClassTitle>
                    <ClassPrice>77,000원</ClassPrice>
                    <ClassReservationButton>
                        <Link to="/class/1">상세보기 👉</Link>
                    </ClassReservationButton>
                </SingleClassContainer>
        </>
    )
}


const SingleClassContainer = styled.div`
    /* border: solid red 1px; */
    min-height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-shadow: 0px 0px 7px 1px #CBCBCB;
    border-radius: 20px;
    margin: 5px 0px 5px 5px;
    .copyright{
        font-size: 5px;
        color: #D4D2D1;
        margin-right: 3px;
    }
`


const ClassThumbnail = styled.img`
    background-size: cover;
    background-position: center;
    width: 250px;
    height: 250px;
    z-index: -1;
    border-radius: 20px 20px 0 0;

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
    :hover {
        transition: 0.5s;
        background-color: #319fb1;
    }

`



export default SingleClass;