import React from 'react';
import styles from './button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
console.log(styles);

const button = ({children, ...rest}) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    );
}

export default button;