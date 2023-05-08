import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

import { BoxItem } from './App.styled.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
    console.log('Box:', BoxItem);
    return (
      <>
        <ContactForm addContact={this.addContact} contacts={contacts} />

        <BoxItem>
          <h2>Contacts</h2>
          <Filter name={filter} onChangeInput={this.handleFilterChange} />
          <ContactList contacts={value} handleDeleteBTN={this.deleteContact} />
        </BoxItem>
      </>
    );
  }
}
