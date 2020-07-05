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
                <FriendChatBox/>
                <FriendChatBox/>
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
        <div className='messageContainer'>
            <h6 className='innerMessageText' >{props.text}</h6>
        </div>
    )
} 

function OuterMessage(props){
    return (
        <div className='messageContainer'>
            <h6 className='outerMessageText' >{props.text}</h6>
        </div>
    )
}

function FriendChatBoxButton(props){
    const [isHovered, setHover] = useState(false)
    return (
        <div className={ ((isHovered)? 'friendImgBoxChat ' + 'chatBoxHovered' :
            'friendImgBoxChat ' + 'notHovered')
            }
            onMouseOver={() => {
                setHover(true)}}
            onMouseOut={() => 
                {
                setHover(false)}}
            onClick={() => 
                {
                    props.onClick(false)
            }}
        >
            <img
                className='circular'
                style={{height: 40 + 'px'}}
                src={require('../../../images/users/noPhoto.png')}
            ></img>
            <span className={'friendStatusCircle logged'}></span>
        </div>
    )
}


function FriendChatBoxMessages(props){
    const [isHovered, setHover] = useState(false)
    return (
        <div className='chatMessages'>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
            <h6>ASD</h6>
        </div>
    )
}

function FriendChatBox(props){
    const [shouldShow, setShow] = useState(false)
    return (
        <div className='chat'>
            {
                shouldShow &&
                    <FriendChatBoxMessages/>
            }
            <FriendChatBoxButton onClick={ () => { 
                setShow(!shouldShow)
            }}/>
        </div>
    )
}
