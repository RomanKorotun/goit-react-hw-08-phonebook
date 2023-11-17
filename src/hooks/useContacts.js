import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return {
    contacts,
    isLoading,
    error,
  };
};
