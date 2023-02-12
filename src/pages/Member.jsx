import React from 'react';
import ListMember from '../components/Member/ListMember';
import memberStyles from "../css/member.module.css";
// import Post from '../components/Member/Post';
import { useNavigate } from "react-router-dom";

const Member = () => {

    const navigate = useNavigate();

    return (
        <>
            <button className={memberStyles.createBtn} onClick={() => navigate("/CreateMember")}>新增會員</button>
            <ListMember />
        </>

    )
}

export default Member