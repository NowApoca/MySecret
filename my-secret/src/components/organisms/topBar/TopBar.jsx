import React from 'react';
import Button from '../../atoms/button/Button'
import ImgButton from '../../atoms/imgButton/ImgButton'
import './topBar.css'

export default function TopBar(props){
    return (
        <div className='topBar'>
            <div className='topbar-flex-box settings'>
                <ImgButton />
            </div>
            <div className='topbar-flex-box homeButton'>
                <Button color='blue' pressed={true} fa='rocket' text='HOME' />
                <Button color='blue' text='HOME'/>
                <Button color='blue' text='HOME'/>
                <Button color='blue' text='HOME'/>
            </div>
            <div className='topbar-flex-box logout'>
                <Button color='red' fa='circle' text='LOGOUT' />
            </div>
        </div>
    )
}