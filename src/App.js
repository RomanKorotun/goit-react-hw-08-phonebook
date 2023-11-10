import React, { useEffect } from 'react';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/Contacts';
import { Layout, TitleH1, TitleH2 } from 'Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/api';
import { BeatLoaderStyled, Error } from 'Message';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);
  return (
    <React.Fragment>
      <Layout>
        <TitleH1>Phonebook</TitleH1>
        <Phonebook />
      </Layout>
      {isLoading && <BeatLoaderStyled color="#36d7b7" />}
      {error && <Error>Error... Please reload the page!</Error>}
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
