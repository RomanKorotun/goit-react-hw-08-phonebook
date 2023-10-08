import React from 'react';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <React.Fragment>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}{' '}
              <button onClick={() => onDeleteContact(name)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};
