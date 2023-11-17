import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { LayoutSection } from 'components/Layout.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { useContacts } from 'hooks/useContacts';
import { fetchContacts } from 'redux/contacts/operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
