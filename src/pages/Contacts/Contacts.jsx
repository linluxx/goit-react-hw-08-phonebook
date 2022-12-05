import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { Container, Title, ContactsTitle } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>
        <FaPhoneAlt />
        Phonebook
      </Title>
      <ContactForm />
      <ContactsTitle>
        <FaUserFriends />
        Contacts
      </ContactsTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
};

export default Contacts;
