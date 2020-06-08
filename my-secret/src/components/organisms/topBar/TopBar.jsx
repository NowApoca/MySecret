import React from 'react';
import Button from '../../atoms/button/Button'
import ImgButton from '../../atoms/imgButton/ImgButton'
import './topBar.css'

export default function TopBar(props){
    return (
        <div className='topBar'>
            <div className='topbar-flex-box settings'>
                <ImgButton img={'./logo512.png'} />
            </div>
            <div className='topbar-flex-box homeButton'>
                <Button color='blue' pressed={true} fa='rocket' text='HOME' />
                <Button color='blue' text='FRIENDS'/>
                <Button color='blue' text='ALL'/>
                <Button color='blue' text='DECRIPTED'/>
            </div>
            <div className='topbar-flex-box logout'>
                <Button color='red' fa='circle' text='LOGOUT' />
            </div>
        </div>
    )
}
