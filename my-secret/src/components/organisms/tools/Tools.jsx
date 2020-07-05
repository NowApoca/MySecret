import React from 'react';
import './tools.css'
import Button from '../../atoms/button/Button'

export default function Tools(props){
    return (
        <div className='tools'>
            <Button to='/about'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='users'
                text='About us'
            />
            <Button to='/explanation'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='book'
                text='How does it work'
            />
            <Button to='/documentation'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='map'
                text='Documentation'
            />
            <Button to='/settings'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='cog'
                text='SETTINGS'
            />
            <Button to='/'
                onClick={() => {
                    props.logOut(false)
                    }}
                pressed={false}
                color='blue'
                fa='chevron-right'
                text='Log out'
            />
        </div>
    )
}