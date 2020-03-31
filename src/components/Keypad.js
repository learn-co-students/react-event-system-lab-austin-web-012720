import React, {Component} from 'react';

class Keypad extends Component {
    handleInput = () => console.log('Entering password...')
    
    render() {
      return (
        <form>
          <label>Enter a Password:</label>  
          <input onKeyUp={this.handleInput} type='password' />
        </form>
      )
    }
}

export default Keypad;
