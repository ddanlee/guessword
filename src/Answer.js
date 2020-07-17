import React, { Component } from 'react'

class Answer extends Component {
  initialState = {
    answer: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitAnswer = () => {
    this.props.handleAnswer(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { answer } = this.state;

    return (
      <form>
        <label htmlFor = "answer">Answer </label>
        <input
          type="text"
          name="answer"
          id="answer"
          value={answer}
          onChange={this.handleChange} />

        <input type="button" value="Submit" onClick={this.submitAnswer} />
      </form>
    );
  }

}


export default Answer;
