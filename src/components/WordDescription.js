import React from 'react';
import { connect } from 'react-redux';

import ActionButtons from './ActionButtons';

const WordDescription = props => {
  return (
    <div className="word-description">
      <h2>Description:</h2>
      <div className="word-description__wrapper">
        <p>{ props.selected.definition }</p>
      </div>
      <ActionButtons />
    </div>
  );
};

const mapStateToProps = state => ({
  selected: state.selected
});

export default connect(mapStateToProps)(WordDescription);
