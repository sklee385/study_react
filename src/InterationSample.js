import React, {Component} from 'react';

class InterationSample extends Component {

    state = {
        names : ['눈사람', '얼음', '눈', '바람'],
        name : ''
    }
    reset_state = this.state;    

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }
    
    handleInsert = () => {
        // name 에 배열 추가 및 name 값 초기화
        if(this.i.value === ''){
            return ;
        }
        this.setState({
            name : this.reset_state.name,
            names : [...this.state.names, this.state.name]
        });
        this.i.value = '' ;
    }

    handleEnter = (e)=>{
        if(e.key === 'Enter'){
            this.handleInsert();
        }
    }

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState ({
            names : [
                ...names.slice(0,index),
                ...names.slice(index+1, this.state.names.length)
            ]
        });
    }

    render() {
        const nameList = this.state.names.map((name, index)=>{
            return (
                <li 
                    key={index}
                >
                    {name}
                    <button 
                        onClick={()=>this.handleRemove(index)}
                    >
                    삭제{index}
                    </button>
                </li>
            );
        });
        return (
            <div>
                <input 
                    ref={(ref) =>{this.i = ref}}
                    onChange={this.handleChange}
                    onKeyPress={this.handleEnter}
                    vlaue={this.state.name}
                />
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList }
                </ul>
            </div>
        );
    }
} 

export default InterationSample;