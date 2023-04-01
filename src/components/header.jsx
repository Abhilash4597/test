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
      </div>
    </div>
  );
}
