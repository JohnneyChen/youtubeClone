import React, { useState } from 'react'

const Searchbar = ({ placeholder, onSearchSubmit }) => {
    const [query, setQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onSearchSubmit(query)
    }

    return (
        <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <input type="text" value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder={placeholder}></input>
            </div>
        </form >
    )
}

export default Searchbar