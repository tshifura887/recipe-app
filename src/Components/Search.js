import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import './Search.css'

export default function Search() {
    let navigate = useNavigate();
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    }

    const handleSearchText = (e) => {
        setInput(e.target.value);
    }
    return (
        <form className='search' onSubmit={handleSubmit}>
            <div className='search__form'>
                <FaSearch/>
                <input
                    type="text"
                    value={input}
                    onChange={handleSearchText}
                />
            </div>
        </form>
    )
}
