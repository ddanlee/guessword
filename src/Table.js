import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Word Bank</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.wordData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.add}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>

}


class Table extends Component {
  render() {
    const { wordData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody wordData = { wordData } />
      </table>
    )
  }
}



export default Table;

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
