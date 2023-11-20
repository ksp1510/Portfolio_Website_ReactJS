import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/naafi_photo.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Kishankumar Patel','I am a full stack developer']} speed={100} eraseDelay={800}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    