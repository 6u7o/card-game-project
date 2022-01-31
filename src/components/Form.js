import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let checkTrunfo;

    if (!hasTrunfo) {
      checkTrunfo = (
        <label htmlFor="trunfo-input">
          É trunfo:
          <input
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="trunfo"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>
      );
    } else {
      checkTrunfo = (
        <p>Você já tem um Super Trunfo em seu baralho</p>
      );
    }

    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="name"
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            data-testid="description-input"
            type="textarea"
          />
        </label>
        <label htmlFor="attr1-input">
          attr1:
          <input
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="attr1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2-input">
          attr2:
          <input
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="attr2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3-input">
          attr3:
          <input
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="attr3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="image"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="rare"
            data-testid="rare-input"
            id="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {checkTrunfo}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
