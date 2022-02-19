import React from 'react';

const DisplayScreen = (props) => {
  return (
    <div className="display-screen">
      <textarea className="ops-screen" value={props.opsValue} disabled></textarea>
      <input type="text" className="final-screen" value={props.value} disabled />
    </div>
  )
}

export default DisplayScreen;
