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
  }

  handleInputChange(e) {
    const value = e.target.value;

    this.setState({
      value,
    })
    //this.props.updateMovieSearch(value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          value={this.state.value} //{value: ''}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

export default connect(mapStateToProps, actions)(Search);