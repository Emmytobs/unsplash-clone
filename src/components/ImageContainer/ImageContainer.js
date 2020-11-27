import React from 'react'
import Image from './Image'

import './styles.css'

export default function ImageContainer(props) {
    
    if(props.error) {
        return (
            <p className="error-message">{props.error}</p>
        )
    }

    const imagesToRender = props.imageData.map(image => {
        return <Image key={image.id} smallUrl={image.smallUrl} fullUrl={image.fullUrl} firstName={image.firstName} lastName={image.lastName} location={image.location} />
    })

    return (
        <div className="image-container">
           {imagesToRender}
            {/* <Image url="./nordwood-themes-KcsKWw77Ovw-unsplash.jpg" name="Anthony Evans" location="Pretoria, South Africa" width="640" height="960"/>     */}
        </div>
    )
}