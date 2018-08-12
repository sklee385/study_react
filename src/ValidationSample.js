import React, {Component} from 'react';

class ValidationSample extends Comment{
    state = {
        password : '',
        clicked : false , 
        validated : false 
    };
    reset_state = this.state;

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked : true ,
            validated : this.state.password === '000'
        });
    }

    render (){
        return (
            <div>
                <input type='password' value={this.state.password}/>
            </div>
        ); 
    }
}