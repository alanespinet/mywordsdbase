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
    default:
      return state;
  }
};
