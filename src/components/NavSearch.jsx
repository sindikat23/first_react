import React from 'react'

function NavSearch() {
  return (
    <div className="container">
      <div>
        <input id='search' type="search" placeholder='4 items found for category Entertainment' />
      </div>
      <div id='search-category'>
        <div className='category'>
          <p>Category: </p>
          <select>
            <option value="1">Men's clothing</option>
            <option value="2">Women's clothing</option>
            <option value="3">Electonics</option>
            <option value="4">Jewelrys</option>
          </select>
        </div>
        <div className='cat-btns'>
          <button className='btn'>Today’s Pick</button>
          <button className='btn'>Trending</button>
        </div>
      </div>
    </div>
  )
}

export default NavSearch