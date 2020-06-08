import React, { useState } from 'react';
import Button from '../../atoms/button/Button'
import ImgButton from '../../atoms/imgButton/ImgButton'
import './topBar.css'
import { Link } from 'react-router-dom';

export default function TopBar(props){
    const [pressed, setPressed] = useState('home');
    console.log(pressed, " PRESSED ")
    return (
        <div className='topBar'>

<div className='topbar-flex-box settings'>
                
                </div>
                <div className='topbar-flex-box homeButton'>

                <Button to='/home'
                    onClick={() => {
                        setPressed('home')}}
                    pressed={(pressed === 'home')?true:false}
                    color='blue'
                    fa='home'
                    text='HOME'
                />
                <Button to='/home/friends'
                    onClick={() => setPressed('friends')}
                    pressed={(pressed === 'friends')?true:false}
                    color='blue'
                    text='FRIENDS'
                />
                <Button to='/home/all'
                    onClick={() => setPressed('all')}
                    pressed={(pressed === 'all')?true:false}
                    color='blue'
                    text='ALL'
                />
                <Button to='/home/decrypted'
                    onClick={() => setPressed('decrypted')}
                    pressed={(pressed === 'decrypted')?true:false}
                    color='blue'
                    text='DECRYPTED'
                />
                </div>
                <div className='topbar-flex-box logout'>
                    <Button color='red' fa='circle' text='LOGOUT' />
                </div>
        </div>
    )
}


/*

 */