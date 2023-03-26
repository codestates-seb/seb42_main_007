import React from "react";
import styled from "styled-components";

const PaymentFailureWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const PaymentFailureContainer = styled.div`
    height: 200px;
    width: 70%;
    border-radius: 20px;
    border: #3FBED3 3px solid;
    justify-content: center;
    align-items: center;
    display: flex;
    .message {
        text-align: center;
    }
`

const PaymentFailure = () => {
    return (
        <>
        <PaymentFailureWrapper>
        <PaymentFailureContainer>
            <div className="message">
                <h1> 😉 결제가 성공적으로 완료되었습니다. </h1>
            </div>
        </PaymentFailureContainer>
        </PaymentFailureWrapper>
        </>
    )
}

export default PaymentFailure;