import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
function Main() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todos);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  console.log(list);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDetail = (e) => {
    setDetail(e.target.value);
  };

  const addBox = () => {
    const newList = {
      id: crypto.randomUUID(),
      title,
      detail,
      isDone: false,
    };
    dispatch(addTodo(newList));
  };

  const deleteBox = (id) => {
    dispatch(deleteTodo(id));
  };

  const switchBox = (id) => {
    dispatch(switchTodo(id));
  };

  const workingList = list.filter((item) => !item.isDone);
  const doneList = list.filter((item) => item.isDone);
  return (
    <>
      <div>
        <h2>TodoList</h2>
        제목: <input value={title} onChange={addTitle} /> &nbsp; 내용:
        <input value={detail} onChange={addDetail} /> &nbsp;
        <button onClick={addBox}>추가하기</button>
      </div>
      <h2>Working... </h2>
      {workingList.map((item) => {
        const switchPage = `/detail/${item.id}`;
        return (
          <div key={item.id}>
            <Link to={switchPage}>상세페이지로</Link>
            <h2>{item.title}</h2>
            <h3>{item.detail}</h3>
            <button onClick={() => deleteBox(item.id)}>
              삭제하기
            </button> &nbsp;{" "}
            <button onClick={() => switchBox(item.id)}>완료</button>
          </div>
        );
      })}
      <h2>Done... </h2>
      {doneList.map((item) => {
        const switchPage = `/detail/${item.id}`;
        return (
          <div key={item.id}>
            <Link to={switchPage}>상세페이지로</Link>
            <h2>{item.title}</h2>
            <h3>{item.detail}</h3>
            <button onClick={() => deleteBox(item.id)}>
              삭제하기
            </button> &nbsp;{" "}
            <button onClick={() => switchBox(item.id)}>취소</button>
          </div>
        );
      })}
    </>
  );
}

export default Main;
