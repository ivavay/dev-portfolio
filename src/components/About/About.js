import React from "react"
import image from './../../images/profile.jpg';

function About() {
    return(
        <div>
            <div className="about-info">
            <div>
            <h1 className="about-hello">Hello! 你好!</h1>
            <p>Thanks for stopping by! I’m Ivy and I graduated in 2021 with a degree in cognitive science w/ a concentration in HCI from University of Calfornia, Santa Cruz. Coming from a design-centric background, I have an eye for good layouts and can bring that to the development work that I do. In 2022, I am planning to move from the San Francisco Bay Area to Taipei because I love the city and am actively looking for a full-time front-end development role in Taipei. </p>
            <p>In my free time, I love to spend time learning more about data visualizations with D3.js, making generative art with p5.js, and taking portraits.</p>
            </div>
            <img alt ="profile" src={image}/>
            </div>
            <div className="lets-connect">
                <h2 className="connect">Let's Connect</h2>
                <ul className="socials">
                    <a href="https://www.linkedin.com/in/ivy-chen-4065aab7/" rel="noreferrer" target='_blank'><li className="socials-link">Linkedin ↗</li></a>
                    <a href="https://github.com/ivavay" rel="noreferrer" target='_blank'><li className="socials-link">Github ↗</li></a>
                    <a href="https://twitter.com/wonderbarstudio" rel="noreferrer" target='_blank'><li className="socials-link">Twitter ↗</li></a>
                    <a href="https://dev.to/ivavay" rel="noreferrer" target='_blank'><li className="socials-link">Blog ↗</li></a>
                </ul>
            </div>
        </div>
    
    )
}


export default About 