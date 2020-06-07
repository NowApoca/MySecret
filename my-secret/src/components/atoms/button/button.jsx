import React from 'react';
import './button.css'

export default function Button(props){
    return (
        <div className={props.position}>
            <button className='proButton'>{props.text}</button>
        </div>
    )
}