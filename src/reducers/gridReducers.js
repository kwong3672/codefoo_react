const gridReducers = (state = {rows: [], userSelectedChain: {}}, action) => {
  switch (action.type) { 
    case 'CREATE_GRID': 
      return {
        ...state,
        validAnswers: null,
        count: null,
        sum: null,
        userSelectedChain: {},
        rows: action.payload.map((row, rowIdx) => {
          return row.map((value, colIdx) => {
            const id = '' + rowIdx + colIdx;
            return {
              id,
              value,
              partOfAnswer: false,
            }
          })
        })
      }
    case 'DISPLAY_ALL_ANSWERS':
      return {
        ...state,
        validAnswers: Object.keys(action.payload),
        count: Object.keys(action.payload).length
      }
    case 'DISPLAY_SELECTED_ANSWER':
      return {
        ...state,
        rows: state.rows.map((row) => {
          return row.map((cell) => {
            return {
              ...cell,
              partOfAnswer: action.payload.includes(cell.id)
            }
          })          
        })
      }
    case 'USER_SELECTED_CHAIN':
      const id = action.payload.cellId;
      const value = !(state.userSelectedChain[id]) ? action.payload.value : - action.payload.value;
      return {
        ...state,
        sum: (state.sum || 0) + value,
        userSelectedChain: {
          ...state.userSelectedChain,
          [id]: value
          // [id]: !state.userSelectedChain[id]
        }
      }
    case 'DISPLAY_VALID_MOVES': 
      return {
        ...state,
        rows: state.rows.map((row) => {
          return row.map((cell) => {
            return {
              ...cell,
              validMove: action.payload.includes(cell.id)
            }
          })          
        })
      }  
    default:
      return state;
  }
};

export default gridReducers;
