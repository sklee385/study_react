import React, {Component } from 'react';
import "./Palette.css";

class Palette extends Component{
    render(){
        const {colors, onclick} = this.props;
        let no = 0 ;  
        const colordiv = colors.map(
            (color) =>{
                const style = {
                    background : color,
                    display : "inline-block"
                }
                no++;
                return (
                <div 
                    style={style} 
                    key={no} 
                    className="color" 
                    onClick={(e)=>{
                        onclick(color);
                    }}
                >
                    
                </div>
            )}
        )
        return (
            <div>
                {colordiv}
            </div>
        )
    }
}

export default Palette; 