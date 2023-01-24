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

//class 컴포넌트
class Modal2 extends React.Component {
    // 기본 작성
    constructor(props) {
        super(props);
        //state 생성
        this.state = {
            name: "kim",
            age: 20,
        };
    }
    render() {
        return (
            <div>
                안녕! {this.state.age}
                <button
                    onClick={() => {
                        //state 변경
                        this.setState({ age: 21 });
                    }}>
                    버튼
                </button>
            </div>
        );
    }
}

export default App;
