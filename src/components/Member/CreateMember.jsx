import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { client } from "../../API/client";
import memberStyles from "../../css/member.module.css";

const CreateMember = () => {
    const navigate = useNavigate();
    const url = '/Members';
    // 底下的 cname, cadddress, ccountry 用來存放使用者輸入的資料
    const [mname, setMname] = useState('');
    const [mphone, setMphone] = useState('');
    const [mdate, setMdate] = useState('');
    const [msex, setSex] = useState('');
    const [mmail, setMmail] = useState('');
    const [maddress, setMaddress] = useState('');
    const newMemberHandler = (e) => {
        e.preventDefault();
        // 變數 obj 將所有使用者輸入的資料封裝成物件
        const obj = {
            name: '' || mname,
            phone: '' || mphone,
            date: '' || mdate,
            sex: '' || msex,
            mail: '' || mmail,
            address: '' || maddress
        };
        (async () => {
            try {
                // 執行實際「新增 company」的動作
                const postResponse = await client.post(url, JSON.stringify(obj))
                console.log(postResponse);
                // 將存放資料輸入的變數，全部設定回空值
                setMname('');
                setMphone('');
                setMdate('');
                setSex('');
                setMmail('');
                setMaddress('');
                alert("新增成功");
                // 導覽回「所有 company 列表」的頁面
                navigate('/Member/');
            } catch (error) {
                console.log(error);
            }
        })();
    }
    return (
        <div>
            <h1 className={memberStyles.title}>新增會員</h1>

            <form onSubmit={newMemberHandler} className={memberStyles.formAdd}>
                <label htmlFor="mname" ><b>姓名：</b></label>
                <input type="text" className={memberStyles.enter} value={mname} placeholder="輸入姓名"
                    onChange={(e) => { setMname(e.target.value) }
                    } required />
                <br />
                <label htmlFor="mphone"><b>電話：</b></label>
                <input type="text" className={memberStyles.enter} value={mphone} placeholder="輸入電話"
                    onChange={(e) => { setMphone(e.target.value) }
                    } required />
                <br />
                <label htmlFor="mdate"><b>生日：</b></label>
                <input type="date" className={memberStyles.enter} value={mdate}
                    onChange={(e) => { setMdate(e.target.value) }
                    }
                />
                <br />
                <label htmlFor="msex"><b>性別：</b></label>
                <input type="text" className={memberStyles.enter} value={msex} name='sex'
                    onChange={(e) => { setSex(e.target.value) }
                    }
                />
                <br />
                <label htmlFor="mmail"><b>信箱：</b></label>
                <input type="text" className={memberStyles.enter} value={mmail}
                    placeholder="輸入信箱"
                    onChange={(e) => { setMmail(e.target.value) }
                    }
                />
                <br />
                <label htmlFor="maddress"><b>地址：</b></label>
                <input type="text" className={memberStyles.enter} value={maddress}
                    placeholder="輸入地址"
                    onChange={(e) => { setMaddress(e.target.value) }
                    }
                />
                <br />
                <button type='submit' className={memberStyles.create}>新增</button>
                <button type='submit' onClick={() => navigate("/member")}
                    className={memberStyles.cancelBtn}>取消</button>
            </form>
        </div>
    )
}

export default CreateMember