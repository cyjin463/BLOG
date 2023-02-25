import "./App.css";
import React, { useState } from "react";

function App() {
    let [titleList, setTitleList] = useState([
        { title: "남자코트 추천", up: 0, writedDate: "2023-01-24" },
        { title: "강남 우동맛집", up: 0, writedDate: "2023-01-24" },
        { title: "파이썬 독학", up: 0, writedDate: "2023-01-24" },
    ]);
    let [currentTitle, setCurrentTitle] = useState(0);
    let [modal, setModal] = useState(false);
    let [inputValue, setInputValue] = useState("");
    let date = new Date().toISOString().split("T")[0];

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            {titleList.map((item, index) => (
                <div className="list" key={`${item.title}-${index}`}>
                    <h4
                        onClick={() => {
                            setModal(true);
                            setCurrentTitle(index);
                        }}>
                        {item.title}
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                let newTitleList = [...titleList];
                                newTitleList[index].up++;
                                setTitleList(newTitleList);
                            }}>
                            👍
                        </span>
                        {item.up}
                    </h4>
                    <p>{item.writedDate}</p>
                    <button
                        onClick={() => {
                            let newTitleList = [...titleList];
                            newTitleList.splice(index, 1);
                            setTitleList(newTitleList);
                        }}>
                        삭제
                    </button>
                </div>
            ))}

            <input
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}></input>
            <button
                onClick={() => {
                    let newTitleList = [...titleList];
                    let addTitle = { title: inputValue, up: 0, writedDate: date };
                    newTitleList.unshift(addTitle);
                    setTitleList(newTitleList);
                    console.log(newTitleList);
                }}>
                추가
            </button>
            {/* html 중간에 조건식 널고싶을때 if 대신 3항 연산자 */}
            {modal === true ? (
                <Modal titleList={titleList} currentTitle={currentTitle} setModal={setModal} />
            ) : null}
            <Modal3 />
            {/* class 컴포넌트 <Modal2></Modal2> */}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.titleList[props.currentTitle].title}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    props.setModal(false);
                }}>
                닫기
            </button>
        </div>
    );
}

function Modal3() {
    let refreshToken = "있다";
    let accessToken = "있다";
    let possibleToken = true;
    let hasError = true;

    const checkToken = () => {
        if (refreshToken && accessToken) {
            console.log("토큰 유무 확인");
            if (possibleToken) {
                console.log("사용가능 토큰");
                console.log("다른작업 1");
                console.log("다른작업 2");
                getData(hasError)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        if (!err) {
                            return console.log("데이터 처리 오류");
                        }
                        newToken();
                    });
                console.log("다른작업 3");
            } else {
                newToken();
            }
        } else {
            newToken();
        }
    };

    const getData = (hasError) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (hasError) {
                    reject(false);
                } else {
                    resolve("데이터 처리");
                }
            }, [3000]);
        });
    };

    const newToken = () => {
        console.log("ID, PW 입력중입니다.");
        setTimeout(() => {
            console.log("새로운 토큰 발급");
        }, [2000]);
    };
}
export default App;
