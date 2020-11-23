import React from 'react'

export default function Image(props) {
    console.log(props.src)
    return (
        <div className="imageDiv">
            <img 
                alt="Demo" 
                src={props.url}
                className="image" 
                width={props.width} 
                height={props.height} 
            />
            <div className="blurb-text">
                <p className="author-name">{props.name}</p>
                <p className="author-location">{props.location}</p>
            </div>
        </div>
    )
}
