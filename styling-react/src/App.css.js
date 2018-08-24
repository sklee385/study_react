import React, { Component } from 'react';
// import logo from './logo.svg';
import classNames from 'classnames/bind';
import styles from './App.css';

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        const is_blue = true ;
        return (
            <div >
                {/* 
                    <div className={[styles.box, styles.blue].join(' ')}>
                */}
                    <div className={cx('box', {'blue' : is_blue}) }>
                    </div>
            </div>
        );
    }
}

export default App;
