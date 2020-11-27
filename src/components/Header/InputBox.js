import React from 'react'

export default function InputBox(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>*icon*</p>
            <input name="searchInput" type="search" value={props.input} className="image-input" onChange={props.handleChange} placeholder="Search for photos" />
        </form>
    )
}
