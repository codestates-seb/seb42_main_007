import React, { useState } from 'react';
import axios from 'axios';



export const requestPayment = async () => {
    try {
      const response = await axios.post(
        'https://kapi.kakao.com/v1/payment/ready', {
            cid: "TC0ONETIME",
            partner_order_id: "partner_order_id",
            partner_user_id: "partner_user_id",
            item_name: "서핑강좌", // title
            quantity: 1, // 인원수
            total_amount: 22000, // 총 가격
            vat_amount: 0,
            tax_free_amount: 0,
            approval_url: "http://localhost:3000/paysuccess",
            fail_url: "http://localhost:3000",
            cancel_url: "http://localhost:3000/class/1",
          }, {
            headers: {
                'Authorization': `KakaoAK 96b2b8ecaf66cbe0b9ddaaa9fb1fda29`,
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        }
      );
      /* 결제 페이지로 이동 */
      window.location.href = response.data.next_redirect_pc_url;
      console.log(response.data.tid)
    } catch (error) {
        console.error(error);
    } 
  };

 export const handlePaymentResult = async () => {
    try {
      const response = await axios.post(
        'https://kapi.kakao.com/v1/payment/approve',
        {
          /* 결제 승인 정보 */
        },
        {
          headers: {
            Authorization: `KakaoAK ${process.env.KAKAOPAY_REST_API_KEY}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );

      /* 결제 정보를 서버로 보내고 결제 완료 메시지를 표시 */
      await axios.post('/api/payment', response.data);
    } catch (error) {
      console.error(error);
    }
  };


//   //sdk 초기화
//   const Kakao = window.Kakao;
// Kakao.init(process.env.KAKAOPAY_REST_API_KEY)

//  //결제 객체 생성
// Kakao.Pay.create({
//     cid: 'TC0ONETIME', // 테스트결제용 가맹점코드
//     partner_order_id: '주문번호',
//     partner_user_id: '사용자 ID',
//     item_name: '상품명',
//     quantity: 1,
//     total_amount: 1000,
//     tax_free_amount: 0,
//     approval_url: '성공 URL',
//     cancel_url: '취소 URL',
//     fail_url: '실패 URL',
//   }, function(response) {
//     // ...
//   });
  
//   //결제 요청
//   Kakao.Pay.request(payObject);

//   //결과 처리
//   Kakao.Pay.create({
//     cid: '가맹점 코드',
//     partner_order_id: '가맹점 주문번호',
//     partner_user_id: '가맹점 회원 ID',
//     item_name: '상품명',
//     quantity: 1,
//     total_amount: 1000, //상품총액
//     tax_free_amount: 0, //상품 비과세금액
//     approval_url: '성공 URL', // 결제성공시 redirect
//     cancel_url: '취소 URL',
//     fail_url: '실패 URL',
//   }, function(response) {
//     if (response.success) {
//       // 결제가 완료된 경우
//       // 결제 완료 페이지를 호출한다.
//     } else {
//       // 결제가 실패한 경우
//       // 결체 취소 페이지를 호출한다.
//     }
//   });
  

