const getWords = (words, filter) => {
  return words.filter( w => w.word.startsWith(filter.wordStart) );
}

export default getWords;
