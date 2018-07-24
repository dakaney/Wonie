import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { value } = state.searchField;

    console.log('value', value);
  return {
    value,
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSearchButtonPress = this.onSearchButtonPress.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;

    this.setState({
      value,
    })
  }

  onSearchButtonPress(movie) {
    this.props.searchMovie(movie);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          value={this.state.value} 
          onChange={(e) => this.handleInputChange(e)}
        />
        <button className="btn hidden-sm-down" onClick={() => this.onSearchButtonPress(this.state.value)}>
          <span className="glyphicon glyphicon-search">Search</span>
        </button>
      </div>
    );
  }

}

export default connect(mapStateToProps, actions)(Search);