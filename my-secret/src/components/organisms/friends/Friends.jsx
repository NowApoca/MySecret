import React, {useState} from 'react';
import ImgButton from '../../atoms/imgButton/ImgButton'
import './friends.css'
import '../../../images/users/noPhoto.png'

export default function Friends(props){
    const friends = [
        {name: "juan", status: "logged", lastSeen: '14:02'},
        {name: "juan1", status: "disconnected", lastSeen: '14:02'},
        {name: "juan2", status: "away", lastSeen: '14:02'},
        {name: "juan3", status: "logged", lastSeen: '14:02'},
        {name: "juan4", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
    ]
    const rows = []
    rows.push()
    friends.map( friend => {
        rows.push(FriendBox(friend))
    })
    return (
        <div className='friends'>
            {rows}
        </div>
    )
}

function FriendBox(props){
    const [boxClass, setBoxClass] = useState('friendBox')
    return (
        <div key={props.name} className={boxClass} onMouseOver={() => {
            console.log('AKI')
            setBoxClass('friendBox' + ' friendBoxHovered')
        }} onMouseOut={() =>{
            setBoxClass('friendBox')
        }} >
            <div className='friendImgBox'>
                <ImgButton src='/users/manu.jpeg' />
                <span className={'friendStatusCircle '+ props.status}></span>
            </div>
            <div>
                {props.name}
            </div>
            <div >
                {props.lastSeen}
            </div>
        </div>
    )
}