import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectErrorAddContacts,
  selectErrorDeleteContacts,
  selectIsLoadingDelete,
  selectLoadingAdd,
} from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoadingAdd = useSelector(selectLoadingAdd);
  const isLoadingDelete = useSelector(selectIsLoadingDelete);
  const errorAdd = useSelector(selectErrorAddContacts);
  const errorDelete = useSelector(selectErrorDeleteContacts);
  return {
    contacts,
    isLoadingAdd,
    isLoadingDelete,
    errorAdd,
    errorDelete,
  };
};
