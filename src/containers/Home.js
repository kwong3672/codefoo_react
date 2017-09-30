import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>        
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={20}
                       marginPagesDisplayed={0}
                       pageRangeDisplayed={5} />
      </div>
    );
  }
}

export default Home;

// const mapStateToProps = (state) => {
//   return {
//     count: state.grid.count,
//     rows: state.grid.rows,
//     validAnswers: state.grid.validAnswers,
//     userSelectedChain: state.grid.userSelectedChain,
//     sum: state.grid.sum
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     displayGrid: (grid) => {
//       dispatch(displayGrid(grid));
//     },
//     displayAllAnswers: (answers) => {
//       dispatch(displayAllAnswers(answers));
//     },
//     displaySingleAnswer: (answer) => {
//       dispatch(displaySingleAnswer(answer));
//     },
//     selectCell: (cellId) => {
//       dispatch(selectCell(cellId));
//     },
//     displayValidMoves: (validMoves => {
//       dispatch(displayValidMoves(validMoves));
//     })
//   }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(App);
