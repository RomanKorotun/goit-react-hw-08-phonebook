import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container, LayoutSection } from 'components/Layout/Layout.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { useContacts } from 'hooks/useContacts';
import { fetchContacts } from 'redux/contacts/operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BeatLoaderStyled, Error } from 'components/Message';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { contacts, errorAdd, errorDelete, isLoadingAdd, isLoadingDelete } =
    useContacts();

  return (
    <React.Fragment>
      <LayoutSection>
        <Container>
          <Phonebook />
          {isLoadingAdd && (
            <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
          )}
          {errorAdd && (
            <Error>Error... Please reload the page and try again!</Error>
          )}
        </Container>
      </LayoutSection>
      {contacts.length > 0 && (
        <LayoutSection>
          <Container>
            <Filter />
            <ContactsList />
            {isLoadingDelete && (
              <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
            )}
            {errorDelete && (
              <Error>Error... Please reload the page and try again!</Error>
            )}
          </Container>
        </LayoutSection>
      )}
    </React.Fragment>
  );
};

export default Contacts;
