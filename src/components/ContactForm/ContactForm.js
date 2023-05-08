import { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

import { Inputbox, Input, Form, Label, AddBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleInputTel = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleContactFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.addContact(name, number, this.resetForm);
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleContactFormSubmit}>
          <Inputbox>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={this.handleInputName}
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
            <div>
              <Label htmlFor="number">Number</Label>
              <Input
                onChange={this.handleInputTel}
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
          </Inputbox>
          <AddBtn type="submit">Add contact</AddBtn>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
