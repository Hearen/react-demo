import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button className="btn btn-primary">Press me!</button>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};
