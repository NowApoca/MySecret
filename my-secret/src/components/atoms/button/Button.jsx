import React, { useState, useEffect} from 'react';
import './button.css'
import {Link} from 'react-router-dom'
const FA = require('react-fontawesome')

export default function Button(props){
    const [pressed, setPressed] = useState((props.pressed)? true : false)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        setPressed(props.pressed)
    }, [props.pressed])
    return (
        <Link to={props.to} style={{ textDecoration: 'none', height: props.height,
            width: props.width }}
            className={ ((pressed)? 'pressed-' + props.color : '') + 
            ((hover)? ' hovered': ' notHovered')
        } onClick={ () =>{
                props.onClick()
            }}
        onMouseOver={() => {
            setHover(true)}}
        onMouseOut={() => 
            {
            setHover(false)}}
        >
            <div style={{marginLeft: props.marginLeft}} className='proButton'>
                <h4 className='buttonText'>
            { (props.fa !== undefined) &&  
                <FA name={props.fa} />
            }
            { (props.text !== undefined) &&  
                props.text
            }
            </h4>
            </div>
        </Link>
    )
}