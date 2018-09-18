const defaultState = {
  wordStart: ''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SET_FILTER':
      return {
        wordStart: action.payload
      }

    default:
      return state;
  }
}
