import React from 'react';
import Input from './Input1';
import Select from './Select1';

class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     name: '',
  //     // description: '',
  //   };
  // }

  // handleChange = (event) => {
  //   const { target } = event;
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    // const { name } = this.state;

    return (
      <form>
        <Input
          testid="name-input"
          type="text"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <Input
          testid="description-input"
          type="textarea"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <Input
          testid="attr1-input"
          type="number"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <Input
          testid="attr2-input"
          type="number"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <Input
          testid="attr3-input"
          type="number"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <Input
          testid="image-input"
          type="text"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <Select />
        <Input
          testid="trunfo-input"
          type="checkbox"
          /* value={ name } */
          onInputChange={ this.handleChange }
        />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
