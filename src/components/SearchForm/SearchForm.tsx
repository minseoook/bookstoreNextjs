import React from "react";
import styled from "./searchForm.module.css";
import { IoSearchOutline } from "react-icons/io5";
const SearchForm = () => {
  return (
    <div className={styled.container}>
      <input type="text" placeholder="검색어를 입력하세요" />
      <IoSearchOutline className={styled.logo} />
    </div>
  );
};

export default SearchForm;
