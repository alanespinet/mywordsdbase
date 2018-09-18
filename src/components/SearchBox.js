import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

class SearchBox extends Component {

  onSetFilterHandler = e => {
    const value = e.target.value;
    this.props.onSetFilter(value);
  }

  render(){
    return (
      <div className="search-box">
        <input type="text" placeholder="Search World" value={this.props.filters.wordStart} onChange={this.onSetFilterHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => dispatch( setFilter(filter) )
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
