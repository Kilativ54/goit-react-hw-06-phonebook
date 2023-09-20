import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import { BtnDelete } from './contactList.styled';

export function ContactList() { 
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();
  return(
  <div>
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </BtnDelete>
        </li>
      ))}
    </ul>
  </div>
);}


