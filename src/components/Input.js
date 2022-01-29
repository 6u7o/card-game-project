import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, /* value, onInputChange, */ type = 'text' } = this.props;

    return (
      <label htmlFor={ name }>
        {name}
        <input
          type={ type }
          // id={ name }
          // name={ name }
          // onChange={ onInputChange }
          // value={ value }
          data-testid={ name }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
