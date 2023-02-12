import React from 'react';
import memberStyles from "../css/member.module.css";


const Post = () => {
    const { box } = memberStyles;
    const { post } = memberStyles;
    return (
        <div className={box}>
            <ol className={post}>
                <li>外借3部影片</li>
                <li>期限15天</li>
                <li>請勿攜帶外食</li>
                <li>室內禁菸</li>
                <li>禁止拍照、錄音、錄影</li>
            </ol>
        </div>
    )
}

export default Post