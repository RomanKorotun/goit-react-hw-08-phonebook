import React from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      if (prevState.contacts.find(item => item.name === newContact.name)) {
        Notiflix.Notify.info(`${newContact.name} is already in contacts`);
        return;
      }
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  filter = target => {
    this.setState({
      filter: target,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(contacts);
    console.log(filter);
    const visibleItems = contacts.filter(contact => {
      if (filter === '') {
        return true;
      }
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <React.Fragment>
        <h1>Phonebook</h1>
        <Phonebook onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter inputValue={filter} onFilter={this.filter} />
        <ContactsList contacts={visibleItems} />
      </React.Fragment>
    );
  }
}
