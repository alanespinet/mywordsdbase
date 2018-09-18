import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from './App';
import { editWord } from '../redux/actions/index';

class ActionFormEdit extends Component {

  onCancelClick = e => {
    e.preventDefault();
    history.push('/');
  }

  onEditClick = e => {
    e.preventDefault();

    history.push('/');
  }

  render(){
    return (
      <div className="action-form">
        <input type="text" placeholder="Word" value={this.props.selected.word} />
        <textarea placeholder="Definition" value={this.props.selected.definition}></textarea>

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
  onEditWord: (word, new_word) => dispatch( editWord(word, new_word) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionFormEdit);
