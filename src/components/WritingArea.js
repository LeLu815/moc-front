import classes from "./write.module.css";
import { useState } from "react";
import {
  useNavigate,
  useActionData,
  Form,
  redirect,
  json,
} from "react-router-dom";

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
const cateKeysList = Object.keys(cateNameObj);

// event는 edit 페이지에서 로더함수로 불러와서 데이터를 넣어줄 때 쓰게된다.
const WritingArea = ({ method, event }) => {
  const navigate = useNavigate();
  const [cateNum, setCateNum] = useState("");
  const [cateString, setCateString] = useState("");
  const [switchTo, setSwitchTo] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [onClose, setOnClose] = useState(false);
  const data = useActionData();

  const handleClick = (num) => {
    setCateNum((prevNum) => {
      if (prevNum.length < 2) {
        const result = `${prevNum}` + `${num}`;
        if (+result <= 13) {
          setCateString(cateNameObj[+result]);
          setDisabled(false);
        } else {
          setCateString("초과!");
          setDisabled(true);
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
    setDisabled(false);
  };
  const onChangeToText = () => {
    setSwitchTo((boolean) => !boolean);
  };
  return (
    <>
      <div className={classes.cate_container}>
        {cateKeysList.map((key) => {
          return (
            <div className={classes.color} key={key}>
              <div className={classes.color_key}>{key}</div>
              <span>{`${key} : ${cateNameObj[key]}`}</span>
            </div>
          );
        })}
      </div>
      <Form method={method} className={classes.writingArea}>
        {data && data.name === "AxiosError" && (
          <div
            className={`${classes.error_container} ${
              onClose ? classes.display_none : ""
            }`}
          >
            <div className={classes.error_card}>
              <div className={classes.error_info}>
                <span className={classes.error_title}>게시글 오류</span>
                <span className={classes.error_en}>{data.message}</span>
                <span className={classes.error_kor}>다시 시도해주세요!</span>
              </div>
              <button
                type="button"
                className={classes.error_btn}
                onClick={() => {
                  setOnClose(true);
                }}
              >
                확인
              </button>
            </div>
          </div>
        )}
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
              disabled={disabled}
              onClick={() => {
                setOnClose(false);
              }}
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
    </>
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
    like_cnt: 0,
    located: false,
    hashtags: hash_string,
  };
  const cateId = parseInt(data.get("cateId"));

  const method = request.method;

  // 같은 이벤트 폼 안에서 데이터를 생성하고 수정할 수 있도록 받습니다.
  let path;
  if (method === "POST") {
    path = `posts/create1/${cateId}/`;
  } else if (method === "PUT") {
    path = `posts/${cateId}/`;
  }

  // 통신에 오류가 생겼을 때의 대처
  try {
    const response = await privateApi.post(`${path}`, eventData);
    if (response.status === 404) {
      console.log("404 :", response);
      return response;
    }
    return redirect("/PopularPostPage");
  } catch (error) {
    console.log(error);
    if (error.response.status === 422) {
      console.log("response 422 :", error);
      return error;
    }
    if (error.response.status === 404) {
      console.log("error 404 : error");
      return error;
    }
    if (error.response.status === 500) {
      return error;
    }
  }

  // if (!response.ok) {
  //   throw json(
  //     { message: "게시물을 작성에 실패했습니다. 다시 시도해주세요" },
  //     { status: 500 },
  //     { en_message: "Could not edit event" }
  //   );
  // }
}
