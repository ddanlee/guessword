import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'
import Answer from './Answer'
import Test from './Test'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      words: [
        {
          add: 'Monday',
        },
        {
          add: 'Tuesday',
        },
        {
          add: 'Wednesday',
        },
        {
          add: 'Clean',
        },
        {
          add: 'Stock',
        },
      ],
      SelectedWord: null,
      randomClicked: false,
      removeClicked: false,
      answers: [
        {
          answer: '',
        }
      ],
      number: 0,
    }
  }

  // function checkWord(word) {
  //   return
  // }

  handleSubmit = (word) => {
    console.log(this.state.words)
    this.state.words.some(each => each !== word) ?
    this.setState({ words: [...this.state.words, word]}) : console.log("Duplicate!")
      
    }

      //{each === word ? alert("Duplicate!") : this.state.words.push(word)}
      // if (each === word) {
      //   alert("Duplicate!");
      // }
      // else {
      //   this.state.words.push(word);

      // }

      //this.setState({ words: [...this.state.words, word]}); <- else 안에 & Original
    //
    //   {each === word ? this.setState({ words: [...this.state.words, word]}) : alert("Duplicate!")
    // })



  handleAnswer = (answer) => {
    this.setState({
      answers: [...this.state.answers, answer],
      number: this.state.number + 1,
    })
    console.log(this.state.number)
  }

  handleClick = () => {
    this.setState({
      randomClicked: true,
      SelectedWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].add,
      number: 0,
      removeClicked: true,
      answers: [
        {
          answer: '',
        }
      ]
    })
    console.log(this.state.number)

  }

  RemoveAllWords = () => {
    this.setState({
      removeClicked: true,
      words: [],
    })
  }
  //
  // RemoveAllAnswers = () => {
  //   this.setState({
  //     removeClicked: true,
  //     answers: [
  //       {
  //         answer: '',
  //       }
  //     ],
  //   })
  // }
  // componentDidMount() {
  //   this.setState({count: 1})
  // }
  // checkAnswer = (SelectedWord, SelectedAnswer) => {
  //   if (SelectedWord = SelectedAnswer) {
  //     return <h1>Correct!</h1>
  //     }
  //   else {
  //     return <h1>Try Again!</h1>
  //   }
  // }
  //
  // wordByword = (SelectedWord) => {
  //   this.setState({
  //     wordCount: SelectedWord.length
  //   })
  // }
// <button onClick = {this.RemoveAllAnswers}>Remove All Answers</button>
  render() {
    const { words, answers } = this.state

    return (
      <div className = "wholeBox">
        <div className = "hanging">
        <Table wordData = {words} />
          <button onClick = {this.RemoveAllWords}>Remove All Words</button>
          <br/> <br/>
          <Form handleSubmit = {this.handleSubmit} />
          <br/>
        </div>
        <div className = "word">
          <div className = "correct">
            <div className = "info">
            <h1>@ Welcome to The "WORD GUESSING" Game @</h1> <br/>
            @ Guess the word from the "Word Bank" above based on the "length of the word" given below <br/>
            @ Press the "Random Word" button to start the game <br/>
            @ Type in the word you guessed in the "Answer" box <br/>
            @ You can Add or remove words from the "Word Bank" as you like<br/>
            </div>
            <div className = "square">
              {"\n"}
              {this.state.randomClicked && this.state.SelectedWord.length}
              <br/>
              <button style={{marginTop:20}}onClick = {() => {
              this.handleClick();
              }}>
              Random Word
              </button>
            </div>
          </div>

          <div className="wrong">
          {this.state.number === 0 ? <h1> </h1> : (this.state.SelectedWord === this.state.answers[answers.length-1].answer) ? <h1>Brilliant!</h1> : <h1>Wrong :(</h1>}
          </div>

          <div className = "testTable">
            <Test testData = {answers} />

            <br/> <br/>
           <Answer handleAnswer = {this.handleAnswer} />
           <br/>

          </div>
        </div>
{/* 
        <div className = "wordTable">

        </div> */}

        {/* <div className = "testTable">
          <Test testData = {answers} />

          <br/> <br/>
          <Answer handleAnswer = {this.handleAnswer} />
          <br/>

        </div> */}
      </div>
    )
  }
}



export default App;
