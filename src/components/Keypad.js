
import React, { Component } from "react";

class Keypad extends Component {
    render() {
        return (
            <div>
                <input type='password' onKeyUp={()=>{console.log('Entering password...')}}>
                </input>
            </div>
        );
    }
}

export default Keypad;