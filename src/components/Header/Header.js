import React, { useState } from 'react';
import InputBox from './InputBox';
import SearchText from './SearchText';

import './styles.css';

export default function Header(props) {
    
    const [formData, setFormData] = useState({
        searchInput: ""
    })

    const handleChange = (el) => {
        const { value } = el.target;
        setFormData({ searchInput: value });
    }

    const handleSubmit = (el) => {
        el.preventDefault()
    }

    return (
        <header className="header">
            <InputBox input={formData.searchInput} handleChange={handleChange} handleSubmit={handleSubmit} />
            <SearchText searchInput={formData.searchInput} />
        </header>
    )
}
