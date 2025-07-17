import React from 'react';


export default function Popup() {
  const handleClick = () => {
    console.log('Record button clicked');
    // navigator.mediaDevices.getUserMedia({ audio: true })
    //   .then(stream => {
    //     console.log('Microphone access granted.');
    //   })
    //   .catch(error => {
    //     console.error('Microphone access denied:', error);
    //   });
  };

  return (
    <div className="popup">
      <h1>Hello Extensions</h1>
      <button onClick={handleClick}>Record</button>
    </div>
  );
}