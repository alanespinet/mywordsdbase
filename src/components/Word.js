import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelected } from '../redux/actions';

class Word extends Component {

  onHandleSelect = () => {
    const selected = {
      word: this.props.word,
      definition: this.props.definition
    };

    this.props.onSetSelected(selected);
  };

  render(){
    return (
      <div className="word">
        <p className={`noselect ${this.props.selected.word === this.props.word ? 'active' : ''}`} onClick={this.onHandleSelect}>{ this.props.word }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  onSetSelected: selected_w => dispatch(setSelected(selected_w))
});

export default connect(mapStateToProps, mapDispatchToProps)(Word);
