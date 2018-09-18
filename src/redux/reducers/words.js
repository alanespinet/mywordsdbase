const defaultState = [
  {
    word: 'alan word 1',
    definition: 'definition 1'
  }, {
    word: 'word alan 2',
    definition: 'definition 2'
  }, {
    word: 'alan word 3',
    definition: 'definition 3'
  }, {
    word: 'word 4 alan',
    definition: 'definition 4'
  }, {
    word: 'word 5',
    definition: 'definition 5'
  }
];

export default ( state = defaultState, action ) => {
  switch( action.type ){
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
