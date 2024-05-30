import React from "react";
import styled from "./login.module.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <h2>로그인</h2>
        <p>저희 북마켓에 오신걸 환영합니다</p>
        <input type="email" placeholder="이메일을 입력해 주세요" />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <button>로그인</button>
        <p>
          아직 회원이 아니신가요? <Link href="/register">회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
