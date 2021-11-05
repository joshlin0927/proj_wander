import React from 'react'

function TcSearchBar(props) {
  const { searchWord, setSearchWord, placeholder } = props

  return (
    <>
      <input
        type="text"
        className="comport-sh-searchbar"
        id="TCsearchbar"
        placeholder={placeholder}
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit" className="">
        <i className="fas fa-search"></i>
      </button>
                 {/* <input
                type="text"
                className="sh-searchbar"
                placeholder="請輸入想搜尋的課程名稱"
                onkeyup="coursename()"
                 type="text"
              />
              <button type="submit" className="">
                <i class="fas fa-search"></i>
              </button> */}
    </>
  )
}

export default TcSearchBar
