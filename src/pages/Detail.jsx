import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  const list = useSelector((state) => state.todos);
  const detailList = list.filter((item) => item.id === id);
  return (
    <>
      {detailList.map((item) => {
        return (
          <>
            <Link to="/">이전으로</Link>
            <h2>{item.title}</h2>
            <h3>{item.detail}</h3>
          </>
        );
      })}
    </>
  );
}

export default Detail;
