import React, { Component } from "react";
import MyComponent from "./myComponent";

class App extends Component {
    render() {
        return (
            <MyComponent name='홍길동' age={1} />
        );
    }
}

export default App;