import React from "react";
import Dropdown from "../Dropdown";
import { useState } from "react";

const HeaderDropdown = props => {

    return (
        <>
        <Dropdown>
            <ul>
            <li>양양 죽도해수욕장</li>
            <li>포항 신항만 용한리해수욕장</li>
            <li>태안 만리포해수욕장</li>
            <li>부산 송정해수욕장</li>
            <li>제주 중문해수욕장</li>
            </ul>
        </Dropdown>
        </>
    )
}

export default HeaderDropdown;