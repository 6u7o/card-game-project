import React from 'react';
// import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    return (
      <select data-testid="rare-input">
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>
    );
  }
}

export default Select;
