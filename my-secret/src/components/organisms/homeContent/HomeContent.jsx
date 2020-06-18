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
        userImage: "noPhoto.png",
        likes: 20,
        decrypted: 5,
        comments: 3
    }]
    const rows = [];
    publications.map( publication => {
        rows.push(
            <li className='homePublicationFlex'>
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
                    <div className='normalText'>
                        <div className='normalTextContent' >
                            Asdasdasd asd asd as das dsa
                        </div>
                    </div>
                    <div className='encryptedText'>
                        <div className='encryptedTextContent' >
                            Asdasdasd asd asd as das dsa
                        </div>
                    </div>
                    <div className='decrypt'>
                        <div className='decryptContent' >
                            Asdasdasd asd asd as das dsa
                            Asdasdasd asd asd as das dsa

                        <div className='decryptSend'>
                            <input className='decryptInput' placeholder='hola' type='text'></input>
                            <div className='decryptButton'>
                                <Button marginLeft='20%'
                                color='red' fa='gavel' />
                            </div>
                            <div className='decryptButton'>
                                <Button marginLeft='20%'
                                color='red' fa='camera' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='publicationTools'>
                    <div className='publicationFooterFlex'>
                        <Button to='/home'
                            onClick={() => {}}
                            pressed={false}
                            height='15px'
                            color='red'
                            fa='heart'
                            text='24'
                        />
                        <Button to='/home'
                            onClick={() => {}}
                            pressed={false}
                            height='15px'
                            color='red'
                            fa='share'
                            text={publication.likes}
                        />
                        <Button to='/home'
                            onClick={() => {}}
                            pressed={false}
                            height='15px'
                            color='red'
                            fa='unlink'
                            text={publication.decrypted}
                        />
                        <Button to='/home'
                            onClick={() => {}}
                            pressed={false}
                            height='15px'
                            color='red'
                            fa='comments'
                            text={publication.comments}
                        />
                    </div>
                    <div className='publicationCommentsFlex'>
                        <Button
                            className='showMoreButton'
                            to='/home'
                            onClick={() => {}}
                            pressed={false}
                            height='30px'
                            color='red'
                            fa='arrow-down'
                            text="Show comments"
                        />
                    </div>
                
                </div>
            </li>
        )
    })
    return (
        <ul className='home'>
            {rows}
        </ul>
    )
}