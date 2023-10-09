import React from 'react';
import { Button, ListItem } from './Contacts.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <React.Fragment>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <div>
              <span>{name}: </span>
              <span>{number} </span>
            </div>
            <Button
              onClick={() => {
                const idx = contacts.findIndex(item => item.name === name);
                return onDeleteContact(idx);
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </ul>
    </React.Fragment>
  );
};
