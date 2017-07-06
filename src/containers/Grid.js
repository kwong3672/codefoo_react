import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import createGrid from '../utils/createGrid';
import createChain from '../utils/createChain';
import nextValidMoves from '../utils/nextValidMoves';

import { displayGrid, displayAllAnswers, displaySingleAnswer, selectCell, displayValidMoves } from '../actions/gridActions'

import Row from '../components/row';
import ValidAnswers from '../components/validAnswers';
import GridFooter from '../components/GridFooter';

import './Grid.css'

class Grid extends Component {

  componentWillMount() {
    this.newGrid();
  }

  newGrid() {
    this.grid = createGrid();
    this.props.displayGrid(this.grid);
    this.displayAllAnswers();
  }

  displayAllAnswers(row, column, chain, previousSum) {
    const validAnswers = {};
    if (!arguments.length) {
      this.grid.forEach((row, rowIdx) => {
        row.forEach((column, colIdx) => {
          createChain(validAnswers, {}, this.grid, rowIdx, colIdx, 0, {});
        });
      });
    } else {
      createChain(validAnswers, {}, this.grid, row, column, previousSum, chain)
    }

    this.props.displayAllAnswers(validAnswers);
  }

  displaySingleAnswer(answer) {
    answer = answer.split(',');
    this.props.displaySingleAnswer(answer);
  }

  cellClicked(cell) {
    const context = this;
    const row = parseInt(cell.cellId[0], 10);
    const column = parseInt(cell.cellId[1], 10);

    const previousChain = {...this.props.userSelectedChain}
    const previousSum = this.props.sum;

    const currentSum = previousSum + cell.value;
    const area = this.props.rows.length * this.props.rows[0].length;

    // check if cell clicked is a valid next move
    if (this.props.rows[row][column].validMove === false) {
      alert('invalid move');
      return console.log('invalid move');
    } 

    // check if sum is greater than area
    if (currentSum > area) {
      alert('the sum is greater too large');
      return;
    }

    //Updating for store is Async so need to create promise to ensure that store is updated
    //before executing next statement
    // create promise that resolves when store has been updated with user selected chain
    const myPromise = new Promise((resolve, reject) => {
      context.props.selectCell(cell)
      resolve()
    }); 

    // display valid next moves
    myPromise.then((response) => {
      const selected = _.reduce(context.props.userSelectedChain, (result, value, key) => {
        if (value => 0) {
          result.push(key);
        }
        return result;
      }, [])
      // displays the selected cells from the user
      context.props.displaySingleAnswer(selected);
    })
    // display valid next moves
    .then(() => {
      const validMoves = nextValidMoves(cell, context.props.userSelectedChain, context.props.sum, this.grid);
      console.log(validMoves);
      context.props.displayValidMoves(validMoves);
    })
    // display valid answers containing user selected cells
    .then(() => {
      context.displayAllAnswers(row, column, previousChain, previousSum)
    })

    .catch((err) => {
      throw err;
    })
  }

  resetGrid() {
    this.props.displayGrid(this.grid)
  }

  render() {
    return (
      <div className="Grid">
        {this.props.rows.map((row, rowIdx)=> {
          return (
            <Row 
              row={row}
              rowIdx={rowIdx} 
              key={rowIdx}
              cellClicked={this.cellClicked.bind(this)}
            />
          )
        })}
        <GridFooter newGrid={this.newGrid.bind(this)} displayAnswers={this.displayAllAnswers.bind(this)} resetGrid={this.resetGrid.bind(this)}/>
        <ValidAnswers 
          totalAnswers={this.props.count || 0} 
          validAnswers={this.props.validAnswers || [] }
          displaySingleAnswer={this.displaySingleAnswer.bind(this)}
          userSelectedChain={this.props.userSelectedChain}
          sum={this.props.sum}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.grid.count,
    rows: state.grid.rows,
    validAnswers: state.grid.validAnswers,
    userSelectedChain: state.grid.userSelectedChain,
    sum: state.grid.sum
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayGrid: (grid) => {
      dispatch(displayGrid(grid));
    },
    displayAllAnswers: (answers) => {
      dispatch(displayAllAnswers(answers));
    },
    displaySingleAnswer: (answer) => {
      dispatch(displaySingleAnswer(answer));
    },
    selectCell: (cellId) => {
      dispatch(selectCell(cellId));
    },
    displayValidMoves: (validMoves => {
      dispatch(displayValidMoves(validMoves));
    })
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Grid));
