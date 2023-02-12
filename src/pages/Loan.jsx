import React from 'react';
import { useState, useEffect } from 'react';
import { client } from "../API/client.js";
// import styles from "../css/dvd.module.css";
import styles from "../css/loan.module.css";

const Loan = () => {
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        (async () => {

            try {
                // 此處 get() 內的參數，是配合 db.json 內容
                // 一般若是直接連後端 server，常會空白
                const { data } = await client.get(`/Category`);
                console.log(data)
                setCategory(data.category)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
   
    const { box } = styles;
    const { category } = styles;
    const { reserve } = styles;
    const { submit } = styles;
    return (
        <>
            <div className={box}>
                <div className={reserve}>
                    <p>外借預約</p>
                </div>
                <h3>借用種類</h3>
                <div style={{ textAlign: 'center' }}>
                    <select className={category}>
                        <option>影片類型</option>
                        {Category.map(({ c_name }, index) => {
                            return (
                                <>
                                    <option>{c_name}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <br />
                <h3>預約日期</h3>
                <div style={{ textAlign: 'center' }}>
                    <input type="date" className={category}></input>
                </div>
                <div style={{ textAlign: 'center', padding:'50px'}}>
                    <input type="submit" value="送出" className={submit} />
                </div>
            </div>

        </>
    )

}

export default Loan