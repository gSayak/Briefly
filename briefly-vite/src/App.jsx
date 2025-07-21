import React from 'react';


export default function Popup() {
  const handleClick = () => {
    console.log('Record button clicked');
  };

  return (
    <div className="popup">
      <h1>Hello Extensions</h1>
      <button onClick={handleClick}>Record</button>
    </div>
  );
}