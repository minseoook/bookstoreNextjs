"use client";

import React, { useState } from "react";
import styled from "./register.module.css";
import { signup } from "@/lib/signup";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      const res = await signup({ email, password });

      if (res.status === 400) {
        alert("비밀번호, 이메일이 옮바르지 않습니다");
        return;
      }
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <h2>회원가입</h2>
        <p>저희 북마켓에 오신걸 환영합니다</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
