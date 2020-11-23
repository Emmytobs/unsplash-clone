import React from 'react'

export default function SearchText(props) {
    return (
        <>
            {props.searchInput && <p className="search-text">Searching for "{props.searchInput}"...</p>}
            {/* {<p className="search-text">Searching for many things to render...</p>} */}
        </>
    )
}