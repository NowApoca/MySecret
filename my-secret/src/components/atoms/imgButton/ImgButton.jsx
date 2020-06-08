import React, { useState} from 'react';
import './imgButton.css'

export default function ImgButton(props){
    return (
        <div >
            <img className='img' src={props.img} />  
        </div>
    )
}