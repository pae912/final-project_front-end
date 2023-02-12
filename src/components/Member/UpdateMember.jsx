import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { client } from "../../API/client";
import memberStyles from "../../css/member.module.css";

const UpdateMember = () => {
    const url = '/Members/';
    const navigate = useNavigate();
    const param = useParams();
    // 底下的 cname, cadddress, ccountry 用來存放使用者的修改資料
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
    // 此函式處理 name 屬性值改變的事件
    const nameChangeHandler = (e) => {
        setMname(e.target.value);
    };
    // 此函式處理 address 屬性值改變的事件
    const phoneChangeHandler = (e) => {
        setMphone(e.target.value);
    };
    // 此函式處理 country 屬性值改變的事件
    const dateChangeHandler = (e) => {
        setMdate(e.target.value);
    };
    // 此函式處理 country 屬性值改變的事件
    const sexChangeHandler = (e) => {
        setSex(e.target.value);
    };
    // 此函式處理 country 屬性值改變的事件
    const mailChangeHandler = (e) => {
        setMmail(e.target.value);
    };
    // 此函式處理 country 屬性值改變的事件
    const addressChangeHandler = (e) => {
        setMaddress(e.target.value);
    };
    // 此函式實際進行 update（修改）的動作
    const updateCompanyHandler = (e) => {
        e.preventDefault();
        // 變數 objCom 將使用者變更的最新資料封裝成物件
        const objCom = {
            name: mname,
            phone: mphone,
            date: mdate,
            sex: msex,
            mail: mmail,
            address: maddress
        };
        (async () => {
            try {
                const { data } = await client.patch(url + param.m_id, objCom);
                console.log(data);
                alert("Company " + param.m_id + " updated!");
                // 導覽回「所有 company 列表」的頁面
                navigate('/member/');
            } catch (error) {
                console.log(error);
            }
        })();
    };
    return (
        <>
            <h1 className={memberStyles.title}>修改會員資料</h1>
            <form onSubmit={updateCompanyHandler} id="data" className={memberStyles.formAdd}>
                <label htmlFor="mname" ><b>姓名：</b></label>
                <input type="text" className={memberStyles.enter} value={mname} onChange={nameChangeHandler}
                    placeholder="輸入姓名" required />
                <br />
                <label htmlFor="mphone" ><b>電話：</b></label>
                <input type="text" className={memberStyles.enter} value={mphone} onChange={phoneChangeHandler}
                    placeholder="輸入電話" required />
                <br />
                <label htmlFor="mdate" ><b>生日：</b></label>
                <input type="date" className={memberStyles.enter} value={mdate} onChange={dateChangeHandler}
                />
                <br />
                <label htmlFor="msex" ><b>性別：</b></label>
                <input type="text" className={memberStyles.enter} value={msex} onChange={sexChangeHandler}
                />
                <br />
                <label htmlFor="mmail" ><b>信箱：</b></label>
                <input type="text" className={memberStyles.enter} value={mdate} onChange={mailChangeHandler}
                    placeholder="輸入信箱" />
                <br />
                <label htmlFor="maddress"><b>地址：</b></label>
                <input type="text" className={memberStyles.enter} value={mdate} onChange={addressChangeHandler}
                    placeholder="輸入地址" />
                <br />
                <button type="submit" className={memberStyles.create}>確定修改</button>
                <button type='submit' onClick={() => navigate("/member")}
                    className={memberStyles.cancelBtn}>取消</button>

            </form>
        </>
    )
}

export default UpdateMember