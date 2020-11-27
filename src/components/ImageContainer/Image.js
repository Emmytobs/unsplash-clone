import React from 'react'

export default function Image(props) {
    return (
        <div key={props.key} className="imageDiv">
            <img 
                alt="Demo" 
                src={props.smallUrl}
                className="image"
                data-full-image-url={props.fullUrl}
            />
            <div className="blurb-text">
                <p className="author-name">{props.firstName} {props.lastName}</p>
                <p className="author-location">{props.location}</p>
            </div>
        </div>
    )
}
