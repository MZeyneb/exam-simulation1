import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import styles from "./index.module.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className={styles["navbar"]}>
        <div className={styles["inp"]}>
        <FaMagnifyingGlass />
            <input type="text" placeholder='Search'/>
        </div>
        <div className={styles["logo"]}>
            <h2>SHOPPERS</h2>
        </div>
        <div className={styles["icons"]}>
        <CiHeart />
        <FaUser />
        </div>
    </div>

    <nav>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/products"}>Products</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>


        </ul>
    </nav>
    </>
  )
}

export default Header