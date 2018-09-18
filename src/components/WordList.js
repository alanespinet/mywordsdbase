import React, { Component } from 'react';
import { connect } from 'react-redux';

import Word from './Word';
import SearchBox from './SearchBox';
import getWords from '../redux/selectors/words';

class WordList extends Component {

  render(){
    return (
      <div className="word-list">
        <h2>Words:</h2>
        <SearchBox />
        <div className="word-list__list-wrapper">
          {this.props.words.map( w =>
            <Word key={w.word} word={w.word} definition={w.definition} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: getWords(state.words, state.filters)
});

export default connect(mapStateToProps)(WordList);
