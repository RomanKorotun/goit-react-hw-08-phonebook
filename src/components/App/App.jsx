import React from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from '../Phonebook/Phonebook';
import { ContactsList } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Section, TitleH1, TitleH2 } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  deleteContact = idx => {
    this.setState(prevState => {
      return {
        contact: prevState.contacts.splice(idx, 1),
      };
    });
  };

  filter = target => {
    this.setState({
      filter: target,
    });
  };

  visibleItems = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      if (filter === '') {
        return true;
      }
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleItems = this.visibleItems();
    return (
      <React.Fragment>
        <Section>
          <TitleH1>Phonebook</TitleH1>
          <Phonebook onAddContact={this.addContact} contacts={contacts} />
        </Section>
        {contacts.length > 0 && (
          <Section>
            <TitleH2>Contacts</TitleH2>
            <Filter inputValue={filter} onFilter={this.filter} />
            <ContactsList
              contacts={visibleItems}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        )}
      </React.Fragment>
    );
  }
}
