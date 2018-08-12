import React, { Component } from 'react';
import propTypes from 'prop-types';


class MyComponent extends Component {

    constructor(props) {
        super(props);
        // state 초기값 설정
        this.state = {
            number : 0 
        }
    }

    static defaultProps = {
        name: "기본 이름"
    };
    static propTypes = {
        name: propTypes.string,
        age: propTypes.number.isRequired
    }


    render() {
        return (
            <div>
                안녕하세요 제 이름은 {this.props.name}입니다.<br />
                나이는 {this.props.age} 입니다. <br />
                숫자 : {this.state.number}
            </div>
        );
    }
}

export default MyComponent;