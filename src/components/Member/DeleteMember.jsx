import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { client } from "../../API/client";
import memberStyles from "../../css/member.module.css";

const DeleteMember = () => {
    const url = '/Members/';
    const navigate = useNavigate();
    const param = useParams();
    // 底下的 cname, cadddress, ccountry 用來存放使用者要刪除的資料
    const [mname, setMname] = useState('');
    const [mphone, setMphone] = useState('');
    const [mdate, setMdate] = useState('');
    const [msex, setSex] = useState('');
    const [mmail, setMmail] = useState('');
    const [maddress, setMaddress] = useState('');
    const getUrl = url + param.m_id;
    useEffect(() => {
        (async () => {
            try {
                const { data } = await client.get(getUrl);
                console.log(data) // 此處可以觀察伺服器回傳的資料
                // 底下設定從後端取回來的資料（依指定 id 值）
                setMname(data.member.m_name);
                setMphone(data.member.m_phone);
                setMdate(data.member.m_date);
                setSex(data.member.m_sex);
                setMmail(data.member.m_mail);
                setMaddress(data.member.m_add);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    const deleteMemberHandler = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const deleteResponse = await client.delete(`/members/${param.m_id}`)
                console.log(deleteResponse);
                alert("member " + param.id + " deleted!");
                // 導覽回「所有 member 列表」的頁面
                navigate('/member/');
            } catch (error) {
                console.log(error);
            }
        })();
    }
    return (
        <>
            <h1>刪除會員資料</h1>

            <form onSubmit={deleteMemberHandler} className={memberStyles.formAdd} id="data">
                <label><b>姓名：</b></label>
                <input type="text" className={memberStyles.enter} value={mname} readOnly />
                <br />
                <label><b>電話：</b></label>
                <input type="text" className={memberStyles.enter} value={mphone} readOnly />
                <br />
                <label><b>生日：</b></label>
                <input type="date" className={memberStyles.enter} value={mdate} readOnly />
                <br />
                <label><b>性別：</b></label>
                <input type="text" className={memberStyles.enter} value={msex} readOnly />
                <br />
                <label><b>信箱：</b></label>
                <input type="text" className={memberStyles.enter} value={mmail} readOnly />
                <br />
                <label><b>地址：</b></label>
                <input type="text" className={memberStyles.enter} value={maddress} readOnly />
                <br />
                <button type="submit" className={memberStyles.create}>確定刪除</button>
                <button type='submit' onClick={() => navigate("/member")}
                    className={memberStyles.cancelBtn}>取消</button>

            </form>
        </>
    )
}

export default DeleteMember