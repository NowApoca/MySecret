import React from 'react';
import './documentation.css'
import {Title,Subtitle,SubSubtitle,Paragraph,List,Hyperlink,Code} from '../../atoms/text/Text'

export default function Documentation(props){
    return (
        <div className='document'>
            <Title text='Titulo' />
            <Subtitle text='Subtitulo' />
            <SubSubtitle text='Subsubtitulo' />
            <Paragraph 
                text={<div>asdnhasjdhasj hdjsa  
                    <Hyperlink text=' asd' />
                    </div>}>
            </Paragraph>
            <SubSubtitle text='Subsubtitulo' />
            <Paragraph text='paragraph very paragraph very paragraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph veryparagraph very paragraph veryparagraph veryparagraph veryparagraph very paragraph veryparagraph very paragraph veryparagraph very paragraph very paragraph veryparagraph veryparagraph veryparagraph very paragraph very paragraph very paragraph very paragraph very' />
            <List text='Numered list' type='numered' points={[1,2,3]} />
            <List text='Dotted list' type='dotted' points={[1,2,3]} />
            <Code text={'asdasdasd sa da ds sad sa'}/>
        </div>
    )
}
