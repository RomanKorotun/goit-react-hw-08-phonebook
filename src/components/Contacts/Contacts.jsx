import React from 'react';
import { Button, ListItem } from './Contacts.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <React.Fragment>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <div>
                <span>{name}: </span>
                <span>{number} </span>
              </div>
              <Button onClick={() => onDeleteContact(name)}>Delete</Button>
            </ListItem>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};
