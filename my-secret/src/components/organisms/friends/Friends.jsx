import React from 'react';
import ImgButton from '../../atoms/imgButton/ImgButton'
import './friends.css'
import '../../../images/users/noPhoto.png'
const FA = require('react-fontawesome')

export default function Friends(props){

    const friends = [
        {name: "juan", status: "logged", lastSeen: '14:02'},
        {name: "juan", status: "disconnected", lastSeen: '14:02'},
        {name: "juan", status: "away", lastSeen: '14:02'},
        {name: "juan", status: "logged", lastSeen: '14:02'},
        {name: "juan", status: "logged", lastSeen: '14:02'},
        {name: "juan", status: "logged", lastSeen: '14:02'},
    ]
    const rows = []
    rows.push()
    friends.map( friend => {
        rows.push(
            <div className='friendBox'>
                <ImgButton src='/users/noPhoto.png' />
                <div>
                    {friend.name}
                </div>
                <div >
                    <FA className={friend.status} name='circle' />
                </div>
                <div >
                    {friend.lastSeen}
                </div>
            </div>
        )
    })
    return (
        <div className='friends'>
            {rows}
        </div>
    )
}