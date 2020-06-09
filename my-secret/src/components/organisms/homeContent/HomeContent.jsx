import React from 'react';
import ImgButton from '../../atoms/imgButton/ImgButton'
import './homeContent.css'

export default function HomeContent(props){
    const publications = [{
        text: "5",
        encryptedText: "5",
        user: "userTest",
        timestamp: new Date(),
        userImage: "noPhoto.png"
    },{
        text: "5",
        encryptedText: "5",
        user: "userTest",
        timestamp: new Date(),
        userImage: "noPhoto.png"
    }]
    const rows = [];
    publications.map( publication => {
        rows.push(
            <div className='homeGrid2'>
                <div className='white1'>
                    hola 5
                </div>
                <div className='white2'>
                    hola 6
                </div>
                <div className='topBarPublication'>
                    <div className='prueba1'>
                        <div className='prueba2'>
                            <h6>hola1</h6>
                            <h6>hola2</h6>
                        </div>
                    </div>
                </div>
                <div className='normalText'>
                    Normal text
                </div>
                <div className='encryptedText'>
                    Encripted text
                </div>
                <div className='decrypted'>
                    decripted
                </div>
                <div className='publicationFooter'>
                    Footer
                </div>
                <div className='comments'>
                    Comments
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