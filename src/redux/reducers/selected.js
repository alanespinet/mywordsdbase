const defaultState = {
  word: 'word selected',
  definition: 'description selected'
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SET_SELECTED':
      return {
        ...action.payload
      }

    default:
      return state;
  }
}
