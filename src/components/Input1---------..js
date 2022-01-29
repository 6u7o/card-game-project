import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, /* value, onInputChange, */ type = 'text', testid } = this.props;

    return (
      <label htmlFor={ name }>
        {name}
        <input
          type={ type }
          // id={ name }
          // name={ name }
          // onChange={ onInputChange }
          // value={ value }
          data-testid={ testid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Input;
