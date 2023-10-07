import React from 'react';
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  filter = target => {
    this.setState({
      filter: target,
    });
  };

  render() {
    console.log(this.state.filter);
    const { contacts, filter } = this.state;
    const visibleItems = contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      }
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
