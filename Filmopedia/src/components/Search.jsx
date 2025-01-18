import React from 'react'
//import Movies from './Movies'
import { useGlobalContext } from '../context'

function Search() {
  const {query , setQuery ,isError} = useGlobalContext()
  return (
    <section className="search-section">
      <h1>Search Your Favourite Movie</h1>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type='text' placeholder='Search-Movie'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
    </section>
  )
}

export default Search
