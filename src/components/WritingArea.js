import React from "react";
import classes from "./write.module.css";
import { useState } from "react";
import { useNavigate, useActionData, Form } from "react-router-dom";

const cateNameObj = {
  0: "꽝!",
  1: "공부",
  2: "운동",
  3: "부동산",
  4: "주식/투자",
  5: "여행",
  6: "취미생활",
  7: "쇼핑/패션",
  8: "음식/요리",
  9: "맛집",
  10: "자기개발",
  11: "영화/드라마",
  12: "독서",
  13: "음악",
};

const WritingArea = ({ method, event }) => {
  const navigate = useNavigate();
  const data = useActionData();
  const [cateNum, setCateNum] = useState("");
  const handleClick = (num) => {
    setCateNum((prevNum) => {
      if (prevNum.length < 2) {
        return `${prevNum}` + `${num}`;
      }
      return prevNum;
    });
  };
  const handleDelete = () => {
    setCateNum("");
  };
  const onChangeToText = () => {
    setCateNum((prevNum) => {
      const toNum = +prevNum;
      console.log(toNum, Boolean(toNum));
      if (!Boolean(toNum)) {
        return prevNum;
      } else if (toNum > 13) {
        return "초과";
      } else {
        return cateNameObj[`${toNum}`];
      }
    });
  };

  return (
    <Form method={method} className={classes.writingArea}>
      <div>
        <input
          className={classes.titleInput}
          id="title"
          type="text"
          placeholder="제목"
          required
          defaultValue={event ? event.title : ""}
        />
        <input
          className={classes.contentInput}
          id="body"
          placeholder="내용을 입력하세요."
          type="text"
          required
          defaultValue={event ? event.body : ""}
        />
        <div className={classes.actions}>
          <button
            className={`${classes.button} ${classes.grey_btn}`}
            onClick={() => {
              navigate("..");
            }}
          >
            취소
          </button>
          <button
            type="submit"
            className={`${classes.button} ${classes.red_btn}`}
          >
            업로드
          </button>
        </div>
      </div>
      <div>
        <h2>카테고리 설정</h2>
        <div class={classes.calculator}>
          <div class={classes.output}>
            <input
              id="cateId"
              class={classes.result}
              value={cateNum}
              required
              defaultValue={event ? cateNameObj[`${event.cateId}`] : ""}
            />
          </div>
          <div class={classes.buttons}>
            <button
              onClick={() => {
                handleClick("1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                handleClick("2");
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                handleClick("3");
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                handleClick("4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                handleClick("5");
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                handleClick("6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                handleClick("7");
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                handleClick("8");
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                handleClick("9");
              }}
            >
              9
            </button>
            <button class={classes["bg-red"]} onClick={handleDelete}>
              C
            </button>
            <button
              onClick={() => {
                handleClick("0");
              }}
            >
              0
            </button>
            <button class={classes["bg-green"]} onClick={onChangeToText}>
              =
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default WritingArea;
