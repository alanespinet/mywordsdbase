import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from './App';

class AddButton extends Component {
  onAddClick = e => {
    e.preventDefault();
    history.push('/add');
  }

  render(){
    return (
      <a className="add-button" href="#" onClick={this.onAddClick}>Add Word</a>
    );
  }
}

export default AddButton;
