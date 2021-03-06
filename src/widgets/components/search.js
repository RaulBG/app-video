import React from 'react'
import './search.css'

// function Search (props) {
//     return (
//         <form></form>
//     )
// }

const Search = (props) => (
  <form className="Search" onSubmit={props.handleSubmit} >
    <input 
      ref={props.setRef} 
      type="text" 
      placeholder="Buscar video.." 
      className="Search-input" 
      onChange={props.handleChange}
      value={props.value}
      />
  </form>
)

export default Search
