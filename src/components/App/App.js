import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Notification } from '../Notification/Notification';

import {
  Container,
  ContactsWrapper,
  FormTitle,
  FormWrapper,
} from './App.styled.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name,
      id: nanoid(),
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
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
          <FormTitle>PhoneBook</FormTitle>
          <ContactForm addContact={this.addContact} contacts={contacts} />
        </FormWrapper>

        <ContactsWrapper>
          <h2>Contacts</h2>
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
