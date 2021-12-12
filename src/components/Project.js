import React from "react"

function Project(props) {
    return(
        <div className="project">
            <h2>{props.title}</h2>
            <div className="project-info">
                <h3>{props.description}</h3>
                <button>{props.tag}</button>
                <div className="see-more">
                <a href= {props.demolink} target='_blank' rel="noreferrer"><span className="demo">{props.demo}</span></a>
                <a href= {props.repolink} target='_blank' rel="noreferrer" ><span className="see-code">{props.seecode}</span></a>
                </div>
            </div>
        </div>
    )
} 

export default Project