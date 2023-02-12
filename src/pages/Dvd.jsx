// import { setSelectionRange } from '@testing-library/user-event/dist/utils/index.js';
import React from 'react';
import { useState, useEffect } from 'react';
import { client } from "../API/client.js";
import styles from "../css/dvd.module.css";

const Dvd = () => {
    const [Dvd, setDvd] = useState([]);
    useEffect(() => {
        (async () => {

            try {
                // 此處 get() 內的參數，是配合 db.json 內容
                // 一般若是直接連後端 server，常會空白
                const { data } = await client.get(`/DVD`);
                console.log(data) // 此處可以觀察伺服器回傳的資料
                setDvd(data.dvds) // 此處可以將 data 的值設定給 product
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    const { movie } = styles;
    return (
        <>
            {Dvd.map(({ d_id, d_no, d_name, c_id, d_introduction }, index) => {
                return (
                    <>
                        
                            <div className={movie}>
                                <h3>{d_name}</h3>
                                <p>{d_introduction}</p>
                            </div>
                        
                    </>
                )
            })}

        </>
    )

}


export default Dvd;