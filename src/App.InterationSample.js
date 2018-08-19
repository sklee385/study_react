import React, { Component } from "react";
// import MyComponent from "./myComponent";
// import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';
import InterationSample from './InterationSample'

class App extends Component {

    onButton = () => {
        this.scrollBox.scrollToBottom();
        console.log(this.scrollBox);
    }

    render() {
        return (
            <div>
                <InterationSample />
            </div>
        );
    }
}

export default App;