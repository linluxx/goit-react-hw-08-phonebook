import { useDispatch, useSelector } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import {
  ContactName,
  ContactNumber,
  ContactsItem,
  ContactsList,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtered = filterContacts();

  return (
    <ContactsList>
      {filtered.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactName>
            <FaRegUserCircle /> {name}
          </ContactName>
          <ContactNumber> {number}</ContactNumber>
          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </DeleteButton>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
