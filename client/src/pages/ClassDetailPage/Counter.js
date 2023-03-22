import React, { useState } from "react";
import styled from "styled-components";
import {CaretUp} from "@styled-icons/fluentui-system-filled/CaretUp"
import {CaretDown} from "@styled-icons/fluentui-system-filled/CaretDown"

const CounterWrapper = styled.div`
    display: flex;
    height: 100px;
    .number {
        font-size: 20px;
        margin-top: -3px;
        /* border: red 1px solid; */
    }
`

const UpButton = styled(CaretUp)`
    width: 20px;
    color: #3FBED3;
    margin-left: 10px;
    :hover{
        color: black;
    }
`

const DownButton = styled(CaretDown)`
    width: 20px;
    color: #3FBED3;
    :hover{
        color: black;
    }

`

const Counter = () => {
    const [number, setNumber] = useState(1);
    const increaseNumber = () => {
        setNumber(number + 1)
    }
    const decreaseNumber = () => {
        setNumber(number - 1)
    }

    return (
        <CounterWrapper>
        <div className="number" number={number}>
            {number}
        <UpButton onClick={increaseNumber}/>
        <DownButton onClick={decreaseNumber}/>
        </div>
        </CounterWrapper>
    )
}

export default Counter;