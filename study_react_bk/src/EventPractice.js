import React, {Component} from 'react';

class EventPractice extends Component{
    
    state = {
        number : 0,
        name : ""
    }
    reset_state = this.state;



    handChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handClick = (e) => {
        alert(`${this.state.name} : ${this.state.number}`)
        this.setState(this.reset_state);
    }
    handKeyPress = (e) => {
        console.log(e);
        if(e.key == 'Enter'){
            this.handClick();
        }
    }


    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input name="name" type="text" value={this.state.name} onChange={this.handChange} onKeyPress={this.handKeyPress}/>
                <input name="number" type="text" value={this.state.number} onChange={this.handChange} onKeyPress={this.handKeyPress}/>
                
                <button onClick={this.handClick}>리셋</button>
            </div>
        );
    }
}

export default EventPractice;