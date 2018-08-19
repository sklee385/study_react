import React, {Component} from 'react';

class LifeCycleSample extends Component{
    state = {
        number : 0, 
        color : null
    }
    reset_state = this.state;

    myRef = null ; // ref 를 설정할 부분

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevProps){
        if(nextProps.color !== prevProps.color){
            return {color : nextProps.color};
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMound');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다. 
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('update 되기 직전의 색상', snapshot);
        }
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1 
        });
    }

    render() {
        console.log('render');

        const style = {
            color : this.props.color
        }
        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>
                    color : {this.state.color}
                </p>
                <button 
                    onClick={this.handleClick}
                >
                    더하기 
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;