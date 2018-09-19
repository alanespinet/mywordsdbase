const defaultState = [];

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'SET_WORDS':
      return action.payload;

    case 'DELETE_WORD':
      return state.filter( w => w.word !== action.payload );

    case 'ADD_WORD':
      return [ ...state, action.payload ];

    case 'EDIT_WORD':
      return state.map( w => {
        if( w.word === action.payload.word )
          return action.payload.new_word;
        return w;
      });

    default:
      return state;
  }
};
