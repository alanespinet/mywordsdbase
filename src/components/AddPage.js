import React, { Component } from 'react';
import ActionForm from './ActionForm';

class AddPage extends Component {

  render(){
    return (
      <div className="add-page page">
        <div className="container">
          <h2>Add Word</h2>
          <ActionForm />
        </div>
      </div>
    );
  }
}

export default AddPage;
