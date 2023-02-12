import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { client } from "../../API/client";
import memberStyle from "../../css/member.module.css";

const ListMember = () => {
    const url = '/Members';
    const [members, setMembers] = useState([]);
    const getMembers = () => {
        (async () => {
            try {
                const { data } = await client.get(url);
                console.log(data); // 此處可以觀察伺服器回傳的資料
                // 此處將取得的資料設定給 members
                // 至於為何是取 data.members 而不是 data，主要取決於
                // 觀察上述 console.log() 的回傳資料格式
                setMembers(data.members);
            } catch (error) {
                console.log(error);
            }
        })();
    };
    useEffect(() => {
        // 實際執行取得「所有 members」資料的動作
        getMembers();
    }, []);
    
    return (
        <div className={memberStyle.sheet}>
            <h1>會員所有資料</h1>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>姓名</th><th>電話</th><th>性別</th><th>生日</th><th>信箱</th><th>地址</th><th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {members &&
                        members.map((member, index) => {
                            return (
                                <tr key={index}>
                                    <td>{member.m_name}</td>
                                    <td>{member.m_phone}</td>
                                    <td>{member.m_sex}</td>
                                    <td>{member.m_date}</td>
                                    <td>{member.m_mail}</td>
                                    <td>{member.m_add}</td>
                                    <td>
                                        <NavLink to={"/UpdateMember/" + member.id}
                                            className={`${memberStyle.borderBtn} ${memberStyle.updateBtn}`}>
                                            修改</NavLink>

                                        <NavLink to={"/DeleteMember/" + member.id}
                                            className={`${memberStyle.borderBtn} ${memberStyle.deleteBtn}`}>
                                            刪除</NavLink>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default ListMember