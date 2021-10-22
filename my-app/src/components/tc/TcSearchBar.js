import React from 'react'

function TcSearchBar(props) {
  const { searchWord, setSearchWord } = props

  return (
    <>
      <input
        type="text"
        class="TCsearchbar"
        id="TCsearchbar"
        placeholder="請輸入課程名稱"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit" class="">
        <i class="fas fa-search"></i>
      </button>
    </>
  )
}

export default TcSearchBar
