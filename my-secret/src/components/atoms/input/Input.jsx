import React from 'react';
import './input.css'

export default function Input(props){
    return (
        <div className={props.position}>
            <input className='proInput'  placeholder={props.placeholder}>
            </input>
        </div>
    )
}