import React, { Component } from 'react'

const TestHeader = () => {
  return (
    <thead>
      <tr>
        <th> Answer</th>
      </tr>
    </thead>
  )
}

const TestBody = (props) => {
  const lines = props.testData.map((line, index) => {
    return (
      <tr key={index}>
        <td>{line.answer}</td>
      </tr>
    )
  })

  return <tbody>{lines}</tbody>

}


class Test extends Component {
  render() {
    const { testData } = this.props

    return (
      <table>
        <TestHeader />
        <TestBody testData = { testData } />
      </table>
    )
  }
}



export default Test;

// import React, { Component } from 'react'
//
// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Word</th>
//       </tr>
//     </thead>
//   )
// }
//
// const TableBody = (props) => {
//   const rows = props.wordData.map((row, index) => {
//     return (
//       <tr key = {index}>
//         <td>{row.pick}</td>
//         //
//         // <td>
//         //   <button onClick={() => props.removeCharacter(index)}>Delete</button>
//         // </td>
//       </tr>
//     )
//   })
//
//   return <tbody>{rows}</tbody>
// }
//
// //single component Table
// const Table = (props) => {
//   const { wordData } = props
//
//   return (
//     <table>
//       <TableHeader />
//       <TableBody
//         wordData = { wordData }
//       />
//     </table>
//   )
// }
//
// //class component Table
// // class Table extends Component {
// //   render() {
// //     const { characterData } = this.props
// //
// //     return (
// //       <table>
// //         <TableHeader />
// //         <TableBody characterData = {characterData} />
// //       </table>
// //     )
// //   }
// // }
//
// export default Table;
