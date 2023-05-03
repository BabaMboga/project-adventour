import React from 'react'

function SearchBar() {
  return (
    <input 
    className='input'
    type='text'
    placeholder = 'Filtered by location'
    onChange={e => onSearch(e.target.value)}
    />
  )
}

export default SearchBar;