import React from 'react'

export default function Search() {
  return (
    <div className="search-container">
      <form action="">
        <input type="text" placeholder="Search" className="search-sort" />
      </form>
      <div className="select-opt">
        <select name="Sort" id="select" className="search-sort">
          <option value="">Select</option>
          <option value="Size">Image-Size</option>
          <option value="Name">Name</option>
        </select>
      </div>
    </div>
  );
}
