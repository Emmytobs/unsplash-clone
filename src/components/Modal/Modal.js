import React from 'react'

import './Modal.css'

export default function Modal(props) {
    if(props.modalShouldShow) {
        return (
            <div className="modal-overlay" onClick={props.closeModal}>
                <div className="modal" >
                    <img src={props.modalImage.image} width="900px" height="550px" alt="Modal from Unsplash" className="modal-image" />
                    <div className="modal-blurb-text">
                        <p className="author-name">{props.modalImage.firstName} {props.modalImage.lastName}</p>
                        <p className="author-location">{props.modalImage.location}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            
        </>
    )
}
