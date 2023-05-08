import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Notification } from '../Notification/Notification';

import {
  Container,
  ContactsWrapper,
  Title,
  FormWrapper,
} from './App.styled.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number, resetForm) => {
    const newContact = {
      name,
      id: nanoid(),
      number,
    };

    const isContactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    return isContactExists
      ? alert(`${name} is already in contacts`)
      : this.setState(
          ({ contacts }) => ({
            contacts: [newContact, ...contacts],
          }),
          resetForm()
        );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  getFilteredContacts = () => {
    const normalizedValue = this.state.filter?.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };
  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const value = this.getFilteredContacts();
    return (
      <Container>
        <FormWrapper>
          <Title>PhoneBook</Title>
          <ContactForm addContact={this.addContact} contacts={contacts} />
        </FormWrapper>

        <ContactsWrapper>
          <Title>Contacts</Title>
          <div>
            <Filter name={filter} onChangeInput={this.handleFilterChange} />
            {value.length !== 0 ? (
              <ContactList
                contacts={value}
                handleDeleteBTN={this.deleteContact}
              />
            ) : (
              <Notification text={'No contacts are available.'} />
            )}
          </div>
        </ContactsWrapper>
      </Container>
    );
  }
}
