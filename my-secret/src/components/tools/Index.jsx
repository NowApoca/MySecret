import React,{useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import {LogIn, Explanation, Documentation, About, Settings} from '../index'
import TopBar from '../organisms/topBar/TopBar'
import Tools from '../organisms/tools/Tools'
import Friends from '../organisms/friends/Friends'
import HomeContent from '../organisms/homeContent/HomeContent'
import './home.css'

export default function Index() {
    const [logged, log] = useState(false);
    return (
        <div >
            {
                !logged && 
                    <>
                        <Route exact path="/"
                            render={() => <LogIn logged={logged} log={log} />}
                        />
                    </>
                
            }
            {
                logged &&
                    <div className='homeGrid'>
                        <Route path="/"  component={TopBar} />
                        <Route path="/" 
                            render={() => <Tools logged={logged} logOut={log} />}
                        />
                        <Route path="/"  component={Friends} />
                        <Switch>
                            <Route path="/home"
                                render={() => <HomeContent filterData='home' />}
                            />
                            <Route path="/friends"
                                render={() => <HomeContent filterData='friends' />}
                            />
                            <Route path="/all"
                                render={() => <HomeContent filterData='all' />}
                            />
                            <Route path="/decrypted"
                                render={() => <HomeContent filterData='decrypted' />}
                            />
                            <Route path="/explanation"  component={Explanation} />
                            <Route path="/documentation"  component={Documentation} />
                            <Route path="/about"  component={About} />
                            <Route path="/settings"  component={Settings} />
                        </Switch>
                    </div>
            }
        </div>
    );
}
