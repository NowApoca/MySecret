import React from 'react';
import Button from '../../atoms/button/Button'
import Input from '../../atoms/input/Input'
import {Link} from 'react-router-dom'
import './login.css'

export default function LogIn(props){
    return(
        <div className="main proBackground"  id="grid">
          <div className="section" id="block22">
                <Input position='item3'  placeholder="USER"></Input>
                <Input  position='item4' placeholder="PASSWORD"></Input>
                <Button to='/home'
                  onClick={() =>{
                    if(props.logged){
                      props.log(false)
                      return;
                    }
                    props.log(true)
                    return;
                  }}
                  position='item5' text="LOGIN"
                >

                </Button>
                <Button position='item6'  text="REGISTER"></Button>
                <Button position='item7'  text="Forgot password"></Button>
          </div>
        </div>
    )
}