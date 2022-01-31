import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rare: 'normal',
      trunfo: false,
      isDisabled: true,
    };
  }

  validateInputs = () => {
    const {
      name,
      description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;
    let finalRes;
    const inputs = [name, description, image, rare];
    inputs.forEach((item) => {
      if ((item.length) < 1) {
        finalRes = true;
      }
    });
    const maxAllAttr = 210;
    const attrSum = Number(attr1) + Number(attr2) + Number(attr3);
    const attrInputs = [attr1, attr2, attr3];
    const maxAttr = 90;
    attrInputs.forEach((item) => {
      if (item < 0 || item > maxAttr || attrSum > maxAllAttr) {
        finalRes = true;
      }
    });
    this.setState({
      isDisabled: finalRes,
    });
    console.log(attrSum);
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ // é uma função assíncrona, por isso pode passar um param (func) para rodar depois que o setState atualizou o valor
      [name]: value,
    }, () => this.validateInputs());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    // this.setState({
    //   isDisabled: true,
    // });
    // console.log('submeteu form');
  }

  render() {
    const {
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
      isDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          // hasTrunfo={  }
          isSaveButtonDisabled={ isDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
