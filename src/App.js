import React from 'react';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/Contacts';
import { Layout, TitleH1, TitleH2 } from 'Layout';
import { useSelector } from 'react-redux';

// const getContactsLs = () => {
//   const contactsLs = localStorage.getItem('contacts');
//   if (contactsLs !== null) {
//     return JSON.parse(contactsLs);
//   }
//   return [];
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getContactsLs);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  // };

  // const filterValue = target => {
  //   setFilter(target);
  // };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  const contacts = useSelector(state => state.contactsKey.contacts);
  // const visibleItems = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <React.Fragment>
      <Layout>
        <TitleH1>Phonebook</TitleH1>
        <Phonebook />
      </Layout>
      {contacts.length > 0 && (
        <Layout>
          <TitleH2>Contacts</TitleH2>
          <Filter />
          <ContactsList />
        </Layout>
      )}
    </React.Fragment>
  );
};
