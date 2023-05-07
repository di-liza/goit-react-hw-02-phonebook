import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  createContactsList = (contactName, contactNumber) => {
    const newContact = {
      name: contactName,
      id: nanoid(),
      number: contactNumber,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    return (
      <>
        <ContactForm
          createContactsList={this.createContactsList}
          contacts={this.state.contacts}
        />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
