import React, { Component } from 'react'


Class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }



  renderSquare(i) {
    return (
      <Square
        value={this.state.words[i]}
        />
      );
    }

    render() {
      
    }


}
export default Square;
