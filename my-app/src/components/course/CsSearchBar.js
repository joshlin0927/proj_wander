import React from 'react'

function CsSearchBar(props) {
  const { searchWord, setSearchWord, placeholder } = props

  return (
    <>
      <input
        type="text"
        className="sh-searchbar"
        placeholder={placeholder}
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit" className="">
        <i className="fas fa-search"></i>
      </button>
    </>
  )
}

export default CsSearchBar
