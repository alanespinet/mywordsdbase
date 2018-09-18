import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWord, resetSelected } from '../redux/actions';

class DeleteButton extends Component {
  onHandleDelete = e => {
    e.preventDefault();

    if(!!this.props.selected.word){
      const word_d = this.props.selected.word;
      this.props.onDeleteWord(word_d);
      this.props.onResetSelected();
    }
  }

  render(){
    return (
      <a className={`delete-button ${!!this.props.selected.word ? '' : 'disabled'}`} href="#" onClick={this.onHandleDelete}>Delete Word</a>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  onDeleteWord: w => dispatch( deleteWord(w) ),
  onResetSelected: () => dispatch( resetSelected() )
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
