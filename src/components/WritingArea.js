import React from "react";
import classes from "./write.module.css";
import { useState } from "react";
import { useNavigate, useActionData, Form, redirect } from "react-router-dom";

import { privateApi } from "../util/http";

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
  const [cateString, setCateString] = useState("");
  const [switchTo, setSwitchTo] = useState(true);
  const handleClick = (num) => {
    setCateNum((prevNum) => {
      if (prevNum.length < 2) {
        const result = `${prevNum}` + `${num}`;
        if (+result <= 13) {
          setCateString(cateNameObj[+result]);
        } else {
          setCateString("초과!");
        }
        return `${prevNum}` + `${num}`;
      }
      return prevNum;
    });
  };
  const handleDelete = () => {
    setCateNum("");
    setCateString("");
    setSwitchTo(true);
  };
  const onChangeToText = () => {
    setSwitchTo((boolean) => !boolean);
  };

  return (
    <Form method={method} className={classes.writingArea}>
      <div>
        <input
          className={classes.titleInput}
          id="title"
          name="title"
          type="text"
          placeholder="제목"
          required
          defaultValue={event ? event.title : ""}
        />
        <input
          className={classes.contentInput}
          id="body"
          name="body"
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
        <div className={classes.cate_name}>카테고리 설정</div>
        <div className={classes.calculator}>
          <div className={classes.output}>
            <input
              id="cateId_show"
              className={classes.result}
              value={switchTo ? cateNum : cateString}
              required
              defaultValue={event ? cateNameObj[`${event.cateId}`] : ""}
            />
            <input value={cateNum} id="cateId" name="cateId" type="hidden" />
          </div>
          <div className={classes.buttons}>
            <button
              type="button"
              onClick={() => {
                handleClick("1");
              }}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("2");
              }}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("3");
              }}
            >
              3
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("4");
              }}
            >
              4
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("5");
              }}
            >
              5
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("6");
              }}
            >
              6
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("7");
              }}
            >
              7
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("8");
              }}
            >
              8
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("9");
              }}
            >
              9
            </button>
            <button
              className={classes["bg-red"]}
              onClick={handleDelete}
              type="button"
            >
              C
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick("0");
              }}
            >
              0
            </button>
            <button
              className={classes["bg-green"]}
              onClick={onChangeToText}
              type="button"
            >
              =
            </button>
          </div>
        </div>
        <div className={classes.hash_title}>해시태그</div>
        <input
          type="text"
          name="hash"
          id="hash"
          className={classes.input_hash}
          placeholder="해시태그 ,(쉼표)로 구분해서 작성해주세요!"
          maxLength="40"
          required
        />
      </div>
    </Form>
  );
};

export default WritingArea;

export async function action({ request, params }) {
  const data = await request.formData();
  const hash_string = data
    .get("hash")
    .split(",")
    .map((value) => {
      const newValue = value.trim().replace(/ /g, "");
      if (newValue.indexOf("#") === -1) {
        return `#${newValue}`;
      } else {
        return "#" + newValue.split("#").join("");
      }
    })
    .join(" ");

  const eventData = {
    title: data.get("title"),
    body: data.get("body"),
    cateId: data.get("cateId"),
    like_cnt: 0,
    located: false,
    hash: hash_string,
  };
  const cateId = parseInt(data.get("cateId"));

  // 통신에 오류가 생겼을 때의 대처
  try {
    const response = await privateApi.post(
      `posts/create/${cateId}/`,
      eventData
    );
    if (!response.ok) {
    }
  } catch (error) {}

  return redirect("/");
}
