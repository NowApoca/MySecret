import React from 'react';
import './explanation.css'
import {Title,Subtitle,SubSubtitle,Paragraph,List,Hyperlink} from '../../atoms/text/Text'

export default function Explanation(props){
    return (
        <div className='document'>
            <Title class='explanationContent' text='Titulo' />
            <Subtitle class='explanationContent' text='Subtitulo' />
            <SubSubtitle class='explanationContent' text='Subsubtitulo' />
            <Paragraph 
                text={<div>asdnhasjdhasj hdjsa  
                    <Hyperlink text=' asd' />
                    </div>} class='explanationContent'>
            </Paragraph>
            <SubSubtitle class='explanationContent' text='Subsubtitulo' />
            <Paragraph class='explanationContent' text='paragraph very paragraph very paragraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph very paragraph veryparagraph veryparagraph veryparagraph very paragraph veryparagraph very paragraph veryparagraph very paragraph very paragraph veryparagraph veryparagraph veryparagraph very paragraph very paragraph very paragraph very paragraph very' />
            <List text='Numered list' type='numered' class='explanationContent' points={[1,2,3]} />
            <List text='Dotted list' type='dotted' class='explanationContent' points={[1,2,3]} />
            
        </div>
    )
}
