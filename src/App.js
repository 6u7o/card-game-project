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
      trunfo: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    // console.log(target.value);
    this.setState({
      [name]: value,
    });
    // console.log('state:', this.state.name);
  }

  isSaveButtonDisabled = () => {

  }

  onSaveButtonClick = () => {

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
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
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
