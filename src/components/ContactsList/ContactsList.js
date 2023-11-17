import { Button, ListItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorVisibleItems } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleItems = useSelector(selectorVisibleItems);
  return (
    <ul>
      {visibleItems.map(({ name, number, id }) => (
        <ListItem key={id}>
          <div>
            <span>{name}: </span>
            <span>{number} </span>
          </div>
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ListItem>
      ))}
    </ul>
  );
};
