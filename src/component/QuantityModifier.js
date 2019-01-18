import React, { Component } from 'react'
import Operator from './Operator';

class QuantityModifier extends Component {
  state = {
      quantity: 0
  }

// Increase the value of quantity by 1 everytime a "+" button is pressed  
handleQantityIncrement = (e) => {
    e.preventDefault();
    this.setState({quantity: this.state.quantity + 1});
}


  //Decrease the value of quantity by 1 everytime a "-" button is pressed
  handleQuantityDecrement = (e) => {
      e.preventDefault();
      if(this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
  }

  render() {
    return (
      <div>
        <h1 className="count">{this.state.quantity}</h1>
        <Operator operator='-' OnClick={this.handleQuantityDecrement} />
        <Operator operator='+' OnClick={this.handleQantityIncrement} />
      </div>
    )
  }
}

export default QuantityModifier