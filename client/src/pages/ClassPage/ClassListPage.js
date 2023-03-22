import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ClassList from "./ClassList";
import styled from "styled-components";
import {ArrowIosForwardOutline} from "@styled-icons/evaicons-outline"
import {ArrowIosBackOutline} from "@styled-icons/evaicons-outline/"
import { Link } from "react-router-dom";
import Slider from 'react-slick';

const ClassListWrapper = styled.div`
    min-height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 100px;
    /* border: 1px red solid; */
    padding-top: 0px;
    padding-bottom: 50px;
`

const ClassListContainer = styled.div`
    width: 100%;
    height: fit-content;
    /* border: 1px red solid; */
    display: flex;
    justify-content: center;
    align-items: center;    
    flex: 1;
`

const Title = styled.span`
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
`

const RightArrowIcon = styled(ArrowIosForwardOutline)`
    width: 30px;
    height: 30px;
    color: #3FBED3;
    /* border: 2px white solid; */
`

const LeftArrowIcon = styled(ArrowIosBackOutline)`
    width: 30px;
    height: 30px;
    color: #3FBED3;
    /* border: 2px white solid; */
`


const CreateNewClassButton = styled.button`
    width: 120px;
    height: 35px;
    color: white;
    background-color: #3FBED3;
    text-align: center;
    border: transparent;
    border-radius: 15px;
    margin-top: 40px;
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;
    left: 320px;
    :hover {
        background-color: #319fb1;
    }
`

const Space = styled.div`
    width: auto;
    height: 120px;
`




const ClassListPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // 한번에 보이는 슬라이드 개수
        slidesToScroll: 1 // 넘길 때 넘어가는 슬라이드 개수
        };

    return (
        <>
        <Header />
        <ClassListWrapper>
            <Title>오늘 이런 수업 어때요? 🌴</Title>
            <ClassListContainer>
                {/* <LeftArrowIcon /> */}
                <Slider {...settings}>
                    <div>
                    <ClassList />
                </div>
                <button type="button" class="slick-prev">Previous</button>
                <button type="button" class="slick-next">Next</button>
                </Slider>
                {/* <RightArrowIcon /> */}
            </ClassListContainer>
            <CreateNewClassButton>
                <div className="show"><Link to="/newclass">새 강좌 작성하기</Link></div>
            </CreateNewClassButton>
            <Space />

        </ClassListWrapper>
        <Footer />
        </>
    )
}

export default ClassListPage;