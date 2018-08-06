import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = "당신은 어썸한가요?";
    const condition = true ;
    const style = {
      backgroundColor : 'gray',
      border : "1px solid black",
      height : Math.round(Math.random() * 300) + 50,
      width : Math.round(Math.random() * 300) + 50 ,
      WebkitTransition : 'all',
      MozTransition : "all",
      msTransition : "all"
    };
    return (
      <div className="my-div">
        <h1>리액트 안녕</h1>
        <h2>{text}</h2>
        { condition ? "참" : "거짓"}<br/>
        { condition && "보여주세요" }
        {
          // 주석 1 
          /* 주석 2 */
        }
        <div
        // 여기 주석은 동작 합니다. 
        // 하지만 /> 는 따로 줄 바뀜을 표시해야 합니다. 
        // 왜냐면 // 주석은 한줄 통채 주석이기 떄문입니다. 
        /* */
        />
        <div style={style}></div>
      </div>
    );
  }
}

export default App;
