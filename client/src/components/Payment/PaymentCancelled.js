import React from "react";
import styled from "styled-components";

const PaymentCancelledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const PaymentCancelledContainer = styled.div`
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

const PaymentCancelled = () => {
    return (
        <>
        <PaymentCancelledWrapper>
        <PaymentCancelledContainer>
            <div className="message">
                <h1> 😌 결제 요청이 취소되었습니다. </h1>
            </div>
        </PaymentCancelledContainer>
        </PaymentCancelledWrapper>
        </>
    )
}

export default PaymentCancelled;