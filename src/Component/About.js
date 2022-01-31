import React from 'react'
import { Link } from "react-router-dom";

const About = (props) => {
    return (
        <>
            <div  style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>About Us</h1>
               </div>
        </>
    )
}

export default About;