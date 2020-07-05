import React from "react";
import {Link} from 'react-router-dom';
import './text.css'

export function Title(props){
    return (
        <span className='title'>{props.text}</span>
    )
}

export function Subtitle(props){
    return (
        <span className='subtitle'>{props.text}</span>
    )
}

export function SubSubtitle(props){
    return (
        <span className='subsubtitle'>{props.text}</span>
    )
}

export function Paragraph(props){
    return (
        <div className={props.class}>
            {props.text}
        </div>
    )
}
export function List(props){
    return (
        <div className={props.class} style={{display: 'flex', flexDirection: 'column'}}>
            <span className='list'>{props.text}</span>
            {
                props.points.map( (point,index) =>{
                   return <div>
                    { props.type == 'numered' && 
                        (index + 1) + '. '
                    }
                    { props.type == 'dotted' && 
                        <span className='dot'/>
                    }
                   {point}
                   </div>
                })
            }
        </div>
    )
}

export function Hyperlink(props){
    return(
        <Link to="/react">{props.text}</Link>
    )
}

export function Code(props){
    return (
        <div className='code' >
            {props.text}
        </div>
    )
}