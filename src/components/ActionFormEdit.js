import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from './App';
import { startEditWord, resetSelected } from '../redux/actions/index';

class ActionFormEdit extends Component {

  onCancelClick = e => {
    e.preventDefault();
    history.push('/');
  }

  onEditClick = e => {
    e.preventDefault();

    const word = document.getElementById('action-form__word-input').value;
    const definition = document.getElementById('action-form__definition-input').value;

    if(!!word.trim() && !!definition.trim()){
      const word_e = {
        word,
        definition
      }

      this.props.onEditWord(this.props.selected.word, word_e);
      this.props.onResetSelected();
      history.push('/');
    } else {
      alert('BOTH Word and Definition must to be present');
    }
  }

  componentDidMount(){
    document.getElementById('action-form__word-input').value = this.props.selected.word;
    document.getElementById('action-form__definition-input').value = this.props.selected.definition;
    document.getElementById('action-form__word-input').autofocus = true;
  }

  render(){
    return (
      <div className="action-form">
        <input type="text" placeholder="Word" id="action-form__word-input" />
        <textarea placeholder="Definition" id="action-form__definition-input"></textarea>

        <div className="action-form__button-wrapper">
          <a href="#" className="action-form__cancel" onClick={this.onCancelClick}>Cancel</a>
          <a href="#" className="action-form__add" onClick={this.onEditClick}>Edit</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  onEditWord: (word, new_word) => dispatch( startEditWord(word, new_word) ),
  onResetSelected: () => dispatch( resetSelected() )
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionFormEdit);
