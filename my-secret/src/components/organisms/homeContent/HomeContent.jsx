import React from 'react';
import ImgButton from '../../atoms/imgButton/ImgButton'
import './homeContent.css'
import Button from '../../atoms/button/Button'

export default function HomeContent(props){
    const publications = [{
        text: "5",
        encryptedText: "5",
        user: "userTest",
        timestamp: new Date(),
        userImage: "noPhoto.png"
    }]
    const rows = [];
    publications.map( publication => {
        rows.push(
            <div className='homePublicationFlex'>
                <div className='publicationTopBarFlex'>
                    <div className='userFlex'>
                        <ImgButton  height='40px' src='/users/manu.jpeg'/>
                        <div className='userNameAndTimestamp'>
                            <div>Nombre</div>
                            <div>Timestamp</div>
                        </div>
                    </div>
                    <Button to='/home'
                        onClick={() => {
                            }}
                        pressed={false}
                        color='blue'
                        fa='cog'
                        text='SETTINGS'
                    />
                </div>
                <div className='publicationContentGrid'>
                    <div className='normalText'>NORMAL</div>
                    <div className='encryptedText'>ENCRYPTED</div>
                    <div className='decrypt'>DECRYPT</div>
                    <div className='publicationTools'>TOOLS</div>
                </div>
                <div className='publicationFooterFlex'>

                </div>
                <div className='publicationCommentsFlex'>

                </div>
            </div>
        )
    })
    return (
        <div className='home'>
            {rows}
        </div>
    )
}