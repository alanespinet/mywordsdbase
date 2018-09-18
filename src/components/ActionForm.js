import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from './App';
import { addWord } from '../redux/actions/index';

class ActionForm extends Component {

  onCancelClick = e => {
    e.preventDefault();
    history.push('/');
  }

  onAddClick = e => {
    e.preventDefault();
    const word = document.getElementById('action-form__word-input').value;
    const definition = document.getElementById('action-form__definition-input').value;

    if(!!word.trim() && !!definition.trim()){
      const word_a = {
        word,
        definition
      }

      this.props.onAddWord(word_a);
      history.push('/');
    } else {
      alert('BOTH Word and Definition must to be present');
    }
  }

  render(){
    return (
      <div className="action-form">
        <input type="text" placeholder="Word" id="action-form__word-input" />
        <textarea placeholder="Definition" id="action-form__definition-input"></textarea>

        <div className="action-form__button-wrapper">
          <a href="#" className="action-form__cancel" onClick={this.onCancelClick}>Cancel</a>
          <a href="#" className="action-form__add" onClick={this.onAddClick}>Add</a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddWord: word => dispatch( addWord(word) )
});

export default connect(null, mapDispatchToProps)(ActionForm);
