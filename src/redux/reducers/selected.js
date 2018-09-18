const defaultState = {
  word: '',
  definition: ''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SET_SELECTED':
      return {
        ...action.payload
      }

    case 'RESET_SELECTED':
      return defaultState;

    default:
      return state;
  }
}
