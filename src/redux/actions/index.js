export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter
});

export const setSelected = selected => ({
  type: 'SET_SELECTED',
  payload: selected
});

export const resetSelected = selected => ({
  type: 'RESET_SELECTED'
});

export const deleteWord = word => ({
  type: 'DELETE_WORD',
  payload: word
});

export const addWord = word => ({
  type: 'ADD_WORD',
  payload: word
});

export const editWord = (word, new_word) => ({
  type: 'EDIT_WORD',
  payload: {
    word,
    new_word
  }
});
