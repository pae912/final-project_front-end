import React from 'react';
import { useState, useEffect } from 'react';
import { client } from "../API/client.js";
import styles from "../css/onsite.module.css";

const Onsite = () => {
    const [Dvd, setDvd] = useState([]);
    // const [Category, setCategory] = useState([]);
    const [Onsite, setOnsite] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // 此處 get() 內的參數，是配合 db.json 內容
                // 一般若是直接連後端 server，常會空白
                const { data } = await client.get(`/Spaces`);
                console.log(data) // 此處可以觀察伺服器回傳的資料
                setOnsite(data.spaces) // 此處可以將 data 的值設定給 product
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        (async () => {

            try {
                // 此處 get() 內的參數，是配合 db.json 內容
                // 一般若是直接連後端 server，常會空白
                const { data } = await client.get(`/DVD`);
                console.log(data)
                setDvd(data.dvds)
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
            <div style={{marginLeft:'280px'}}>
                <div className={box}>
                    <div className={reserve}>
                        <p>空間借用</p>
                    </div>
                    <h3>借用種類</h3>
                    <div style={{ textAlign: 'center' }}>
                        <select className={category}>
                            <option>挑選包廂</option>
                            {Onsite.map(({ s_name }, index) => {
                                return (
                                    <>
                                        <option>{s_name}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                    <br />
                    <h3>借用日期</h3>
                    <div style={{ textAlign: 'center' }}>
                        <input type="date" className={category}></input>
                    </div>
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <input type="submit" value="送出" className={submit} />
                    </div>
                </div>
                <div className={box}>
                    <div className={reserve}>
                        <p>現場借閱</p>
                    </div>
                    <h3>借用片名</h3>
                    <div style={{ textAlign: 'center' }}>
                        <select className={category}>
                            <option>影片名稱</option>
                            {Dvd.map(({ d_name }) => {
                                return (
                                    <>
                                        <option>{d_name}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                    <br />
                    <h3>借用日期</h3>
                    <div style={{ textAlign: 'center' }}>
                        <input type="date" className={category}></input>
                    </div>
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <input type="submit" value="送出" className={submit} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onsite