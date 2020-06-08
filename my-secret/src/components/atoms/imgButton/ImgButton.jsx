import React, { useState} from 'react';
import './imgButton.css'
const FA = require('react-fontawesome')

export default function ImgButton(props){

    const [currentClass, setClass] = useState((props.pressed)? 'pressed' : 'notHovered')

    return (
        <div className={currentClass + '-' + props.color} onClick={ () =>{
            console.log("VER SI CLICKEA")
        }}
        onMouseOver={() => {
            if(!props.pressed){
                setClass('hovered')
            }}}
        onMouseOut={() => {
            if(!props.pressed){
                setClass('notHovered')
            }
            }} >
            <div className='proButton'>
                <h5 className='buttonText'>
            { (props.fa !== undefined) &&  
                <FA name={props.fa} />
            }
            { (props.text !== undefined) &&  
                props.text
            }
            </h5>
            </div>
        </div>
    )
}