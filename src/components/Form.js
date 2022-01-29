import React from 'react';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      // description: '',
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;

    return (
      <form>
        <Input
          name="name-input"
          type="text"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <Input
          name="description-input"
          type="textarea"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <Input
          name="attr1-input"
          type="number"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <Input
          name="attr2-input"
          type="number"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <Input
          name="attr3-input"
          type="number"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <Input
          name="image-input"
          type="text"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <Select />
        <Input
          name="trunfo-input"
          type="checkbox"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
