import React, { Component } from 'react';

let handleKeyUp = () => {
  console.log('Entering password...');
  
}

class Keypad extends Component {
  render() {
    return (
      // <div>
        <input type='password' onKeyUp={handleKeyUp}></input>
      // </div>
    )
  }
}

export default Keypad;
