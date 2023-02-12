import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import styles from "../css/navbar.module.css";


const Nav = () => {
    const { navbar } = styles;
    const { navlink } = styles;
    return (
        <>
            <nav className={navbar}>
                <ul>
                    <li>
                        <NavLink to="/" className={navlink}>首頁</NavLink>
                    </li>
                    <li>
                        <NavLink to="Dvd" className={navlink}>電影介紹</NavLink>
                    </li>
                    <li>
                        <NavLink to="Loan" className={navlink}>外借</NavLink>
                    </li>
                    <li>
                        <NavLink to="Onsite" className={navlink}>現場借閱</NavLink>
                    </li>
                    <li >
                        <NavLink to="Member" className={navlink}>會員</NavLink>
                    </li>


                </ul>
            
            </nav>
            <Outlet />
        </>
    )
};
export default Nav;
