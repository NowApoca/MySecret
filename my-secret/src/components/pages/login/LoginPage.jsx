import React from 'react';
import Button from '../../atoms/button/button'
import Input from '../../atoms/input/input'
import './login.css'

export default function(){
    return(
        <div className="main proBackground"  id="grid">
          <div className="section" id="block22">
              <Input position='item3'  placeholder="USER"></Input>
             <Input  position='item4' placeholder="PASSWORD"></Input>
             <Button position='item5' text="LOGIN"></Button>
             <Button position='item6'  text="REGISTER"></Button>
             <Button position='item7'  text="Forgot password"></Button>
          </div>
        </div>
    )
}