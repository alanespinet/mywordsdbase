import React, { Component } from 'react';
import { history } from './App';
import { connect } from 'react-redux';

class EditButton extends Component {
  onEditClick = e => {
    e.preventDefault();

    if(!!this.props.selected.word){
      history.push('/edit');
    }
  }

  render(){
    return (
      <a className={`edit-button ${!!this.props.selected.word ? '' : 'disabled'}`} href="#" onClick={this.onEditClick}>Edit Word</a>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

export default connect(mapStateToProps)(EditButton);
