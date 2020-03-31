import React, {Component} from 'react';

class EyesOnMe extends Component {
    handleFocusEvent = () => console.log('Good!')
    

    handleBlurEvent = () => console.log('Hey! Eyes on me!')

    render() {
      return (
          <button onBlur={this.handleBlurEvent} onFocus={this.handleFocusEvent} >Eyes on Me</button>
      )    
    }
}

export default EyesOnMe;
