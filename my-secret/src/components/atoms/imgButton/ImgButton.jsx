import React, { useState} from 'react';
import './imgButton.css'

export default function ImgButton(props){
    return (
        <div >
            <img style={{height: props.height}} className='circular' src={require('../../../images' + props.src)} />  
        </div>
    )
}