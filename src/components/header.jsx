import React from 'react';

export default function Header() {
  function changeLayout() {
    let customStyle = {
      display: 'block',
      width: '80%',
    };
  }

  return (
    <div>
      <div className="header">
        <h1>Photo Gallery</h1>
        <div className="header-select">
          <form action="#">
            <label htmlFor="header-select"></label>
            <select name="header-select" id="header-select">
              <option value="" disabled>
                Select
              </option>
              <option value="List">List</option>
              <option value="Grid">Grid</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
