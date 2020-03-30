import React from "react";

class EyesOnMe extends React.Component {
  looking = () => console.log("Good!");

  notLooking = () => console.log("Hey! Eyes on me!");

  render() {
    return (
      <div>
        <button onFocus={this.looking} onBlur={this.notLooking}></button>
      </div>
    );
  }
}

export default EyesOnMe;
