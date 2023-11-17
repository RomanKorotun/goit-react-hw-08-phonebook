import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { LayoutSection } from 'components/Layout.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { useContacts } from 'hooks/useContacts';
import React from 'react';
const Contacts = () => {
  const { contacts } = useContacts();
  return (
    <React.Fragment>
      <LayoutSection>
        <Phonebook />
      </LayoutSection>
      {contacts.length > 0 && (
        <LayoutSection>
          <Filter />
          <ContactsList />
        </LayoutSection>
      )}
    </React.Fragment>
  );
};

export default Contacts;
