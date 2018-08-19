import React, { Component } from "react";
// import MyComponent from "./myComponent";
// import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';
// import InterationSample from './InterationSample'
import LifeSycleSample from './LifeSycleSample';

class App extends Component {
    state = {
        color : '#000000'
    };
    getRendomColor = () => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }

    handleClick = () => {
        this.setState({
            color : this.getRendomColor()
        })
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                >
                    랜덤 색상
                </button>
                <LifeSycleSample color={this.state.color}/>
            </div>
        );
    }
}

export default App;