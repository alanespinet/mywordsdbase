import axios from 'axios';

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

export const startSetWords = () => {
  return dispatch => {
    return axios.get('http://localhost:8080/getallwords')
      .then( response => {
        dispatch( setWords(response.data) )
      });
  };
};

export const setWords = words => ({
  type: 'SET_WORDS',
  payload: words
});

export const startDeleteWord = word => {
  return dispatch => {
    return axios.post('http://localhost:8080/deleteword', { word: word })
      .then( () => dispatch( deleteWord(word) ) )
      .catch( err => console.log(err) );
  }
}

export const deleteWord = word => ({
  type: 'DELETE_WORD',
  payload: word
});

export const startAddWord = p_word => {
  return dispatch => {
    return axios.post('http://localhost:8080/addword', {
      word: p_word.word,
      definition: p_word.definition
    })
      .then( () => dispatch( addWord(p_word) ) )
      .catch( err => console.log(err) );
  }
}

export const addWord = word => ({
  type: 'ADD_WORD',
  payload: word
});

export const startEditWord = (p_word, p_new_word) => {
  return dispatch => {
    return axios.post('http://localhost:8080/editword', {
      word: p_word,
      new_word: p_new_word.word,
      new_definition: p_new_word.definition
    })
    .then( () => dispatch( editWord(p_word, p_new_word) ) )
    .catch( err => console.log(err) );
  }
}

export const editWord = (word, new_word) => ({
  type: 'EDIT_WORD',
  payload: {
    word,
    new_word
  }
});
