export function displayGrid(grid) {
  return {
    type: 'CREATE_GRID',
    payload: grid
  }
};

export function displayAllAnswers(answers) {
  return {
    type: 'DISPLAY_ALL_ANSWERS',
    payload: answers
  }
};

export function displaySingleAnswer(answer) {
  return {
    type: 'DISPLAY_SELECTED_ANSWER',
    payload: answer
  }
};

export function selectCell(payload) {
  return {
    type: 'USER_SELECTED_CHAIN',
    payload: payload
  }
}

export function displayValidMoves(validMoves) {
  return {
    type: 'DISPLAY_VALID_MOVES',
    payload: validMoves
  }
}
