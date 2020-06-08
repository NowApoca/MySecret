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
            <Button to='/home'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='book'
                text='How does it work'
            />
            <Button to='/home'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='map'
                text='Documentation'
            />
            <Button to='/home'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='cog'
                text='SETTINGS'
            />
            <Button to='/home'
                onClick={() => {
                    }}
                pressed={false}
                color='blue'
                fa='chevron-right'
                text='Log out'
            />
        </div>
    )
}