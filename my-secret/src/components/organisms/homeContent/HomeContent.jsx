import React from 'react';
import ImgButton from '../../atoms/imgButton/ImgButton'
import './homeContent.css'
import Button from '../../atoms/button/Button'
import { useState } from 'react';

export default function HomeContent(props){
    let publications;
    switch(props.filterData){
        case 'all':
        publications = []
        break;
        default:
            publications = []      
        break;
    }
    const rows = [];
    publications.map( publication => {
        rows.push(
            <Publication publication={publication} />
        )
    })
    return (
        <div className='home'>
            {rows}
        </div>
    )
}



function Publication(props){
    const [showComments, setShowComments] = useState(false)
    let publication = props.publication

    return (
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
            <Button 
                to='/home'
                onClick={() => {}}
                pressed={false}
                height='15px'
                color='red'
                fa='comments'
                text={publication.comments}
            />
        </div>
        <div className='publicationCommentsFlex'>
            { showComments &&
            <div className="showMoreCommentsFlex">
                <Button
                    onClick={() => {setShowComments(false)}}
                    pressed={false}
                    height='30px'
                    color='red'
                    fa='arrow-up'
                    text="Hide comments"
                />
                <div id='style-1' class='commentsContainer'>
                    <div >
                    {publication.commentsContent.map((value, index) => {
                        return <div className='comment'>
                            <div className='commentContent'>
                            <div className='userFlex'>
                                <ImgButton  height='40px' src='/users/manu.jpeg'/>
                                <div className='userNameAndTimestamp'>
                                    <div>Nombre</div>
                                    <div>Timestamp</div>
                                </div>
                            </div>
                            <div className='commentText'>
                            {value.text}
                            </div>
                            </div>
                            <div className='commentTools'>
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
            /></div>
                        </div>  
                  })}
                    </div>
                </div>
                </div>
                
            }
            { !showComments && 
                <Button
                    onClick={() => {setShowComments(true)}}
                    pressed={false}
                    height='30px'
                    color='red'
                    fa='arrow-down'
                    text="Show comments"
                />
            }
        </div>
        </div>
        </div>
    )
}