import React from "react";
import styled from "./register.module.css";
import Link from "next/link";
const RegisterPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <h2>회원가입</h2>
        <p>저희 북마켓에 오신걸 환영합니다</p>
        <input type="email" placeholder="이메일을 입력해 주세요" />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default RegisterPage;
