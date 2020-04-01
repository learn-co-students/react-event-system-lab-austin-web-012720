
import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;

// // Code Keypad Component Here
// import React from 'react';



// class Keypad extends React.Component {

//     handleKeyUp = () => {
//         console.log("Entering password...")
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     type='password'
//                     onKeyUp={this.handleKeyUp()}
//                 />
//             </div>
//         )
//     }

// }

// export default Keypad;