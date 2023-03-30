import React from 'react'

export default function Header() {
  return (
    <div>
      <div className="header">
        <h1>Photo Gallery</h1>
        <div className="header-select">
          <select name="" id="header-select">
            <option value="">Select</option>
            <option value="">List</option>
            <option value="">Grid</option>
          </select>
        </div>
      </div>
    </div>
  );
}
