import React, { useState } from 'react';
import Button from '../../atoms/button/Button'
import './topBar.css'

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
                <Button to='/friends'
                    onClick={() => setPressed('friends')}
                    pressed={(pressed === 'friends')?true:false}
                    color='blue'
                    text='FRIENDS'
                />
                <Button to='/all'
                    onClick={() => setPressed('all')}
                    pressed={(pressed === 'all')?true:false}
                    color='blue'
                    text='ALL'
                />
                <Button to='/decrypted'
                    onClick={() => setPressed('decrypted')}
                    pressed={(pressed === 'decrypted')?true:false}
                    color='blue'
                    text='DECRYPTED'
                />
                </div>
        </div>
    )
}


/*

 */