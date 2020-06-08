import React from 'react';
import TopBar from '../../organisms/topBar/TopBar'
import Tools from '../../organisms/tools/Tools'
import Friends from '../../organisms/friends/Friends'
import HomeContent from '../../organisms/homeContent/HomeContent'
import './home.css'

export default function Home(props){

    return (
        <div className='homeGrid'>
            <TopBar></TopBar>
            <Tools></Tools>
            <HomeContent></HomeContent>
            <Friends></Friends>
        </div>
    )
}