export default (state = {category: 'videos'}, action) => {
  switch(action.type) {

  case 'CHANGE_CATEGORY':
    return {
      category: action.payload
    }; 

  default:
    return state;
  }

};