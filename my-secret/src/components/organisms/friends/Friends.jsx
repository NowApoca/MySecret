import React, {useState} from 'react';
import ImgButton from '../../atoms/imgButton/ImgButton'
import Button from '../../atoms/button/Button'
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
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
        {name: "juan5", status: "logged", lastSeen: '14:02'},
    ]
    const rows = []
    rows.push()
    friends.map( friend => {
        rows.push(FriendBox(friend))
    })
    const messagesOpen = [{
        text: "asd",
        color: 'red'
    },{
        text: "asd",
        color: 'blue'
    },{
        text: "asd",
        color: 'yellow'
    }]
    const messages = []
    messagesOpen.map( chat => {
        messages.push(
            <div className='chat' style={{backgroundColor: chat.color}}>
                <InnerMessage text='asdasdasd' />
                <OuterMessage text='asdasdasd' />
            </div>
        )
    })
    return (
        <div className='friends'> 
            {rows}
            <div className="friendSearch">
                <input className='friendSearchInput'></input>
                <Button width='10%' marginLeft='20%' className='searchButton' color='red' fa='search' />
            </div>
            <div className='chatContainer'>
                <div className='chat' style={{backgroundColor: 'red'}}>
                    <InnerMessage text='asdasdasd' />
                    <OuterMessage text='asdasdasd' />
                    <div className='friendImgBox'>
                        <ImgButton src='/users/manu.jpeg' />
                        <span className={'friendStatusCircle '+ props.status}></span>
                    </div>
                </div>
                <div className='chat' style={{backgroundColor: 'blue'}}>
                    <InnerMessage text='asdasdasd' />
                    <OuterMessage text='asdasdasd' />
                    <div className='friendImgBox'>
                        <ImgButton src='/users/manu.jpeg' />
                        <span className={'friendStatusCircle '+ props.status}></span>
                    </div>
                </div>
                <div className='chat' style={{backgroundColor: 'yellow'}}>
                    <InnerMessage text='asdasdasd' />
                    <OuterMessage text='asdasdasd' />
                    <div className='friendImgBox'>
                        <h6>MANUMANUMANU</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FriendBox(props){
    const [boxClass, setBoxClass] = useState('friendBox')
    return (
        <div key={props.name} className={boxClass} onMouseOver={() => {
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

function InnerMessage(props){
    return (
        <h6>{props.text}</h6>
    )
} 

function OuterMessage(props){
    return (
        <h6>{props.text}</h6>
    )
}