import React from 'react';

export const ContactsList = ({ contacts }) => {
  return (
    <React.Fragment>
      {contacts.length > 0 && (
        <section>
          <ul>
            {contacts.map(({ name, number, id }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </section>
      )}
    </React.Fragment>
  );
};
