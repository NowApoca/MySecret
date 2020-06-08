import React, { useState} from 'react';

export default function ImgButton(props){
    console.log(props)
    return (
        <div >
            <img className='circular' src={require('../../../images' + props.src)} />  
        </div>
    )
}