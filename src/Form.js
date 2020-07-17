import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    add: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { add } = this.state;

    return (
      <form>
        <label htmlFor = "add">New Word  </label>
        <input
          type="text"
          name="add"
          id="add"
          value={add}
          onChange={this.handleChange} />

        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }

}


export default Form;
