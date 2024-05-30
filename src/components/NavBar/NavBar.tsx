import React from "react";
import styled from "./navbar.module.css";
import logo from "../../../public/images/logo.png";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";

const NavBar = () => {
  return (
    <div className={styled.container}>
      <div className={styled.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={60}
            className={styled.logoimg}
          />
        </Link>
      </div>
      <SearchForm />
      <div className={styled.buttons}>
        <Link href="/login" className={styled.login}>
          로그인
        </Link>
        <Link href="/cart" className={styled.cart}>
          <IoCartOutline className={styled.cartimg} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
