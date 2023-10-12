import React from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/Contacts';
import { Layout, TitleH1, TitleH2 } from 'Layout';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLs = localStorage.getItem('contacts');
    if (contactsLs !== null) {
      this.setState({
        contacts: JSON.parse(contactsLs),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
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
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleItems = this.visibleItems();
    return (
      <React.Fragment>
        <Layout>
          <TitleH1>Phonebook</TitleH1>
          <Phonebook onAddContact={this.addContact} contacts={contacts} />
        </Layout>
        {contacts.length > 0 && (
          <Layout>
            <TitleH2>Contacts</TitleH2>
            <Filter inputValue={filter} onFilter={this.filter} />
            <ContactsList
              contacts={visibleItems}
              onDeleteContact={this.deleteContact}
            />
          </Layout>
        )}
      </React.Fragment>
    );
  }
}
