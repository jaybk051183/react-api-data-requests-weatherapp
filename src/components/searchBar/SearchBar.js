import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar({setLocationHandler}) {
    const [query, setQuery] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log('submitted')
        setLocationHandler(query)
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
            type="text"
            name="search"
            placeholder="Zoek een stad in Nederland"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <button
            type="submit"
            >
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;