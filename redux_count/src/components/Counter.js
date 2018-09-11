import React from 'react';
import PropType from 'prop-types';


const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div 
            className="Counter"
            onClick={onIncrement}
            on
        >
        </div>
    )
}