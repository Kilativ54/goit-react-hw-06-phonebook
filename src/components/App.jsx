import { useState, useEffect } from 'react';

import { Container } from './App.styled';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  const handleSubmit = contactItem => {
    const { name } = contactItem;
    if (contacts.some(contact => contact.name === name)) {
      alert('Warning', `${name} is already in contacts.`);
    } else {
      setContacts(prevState => [contactItem, ...prevState]);
    }
  };

  const handleDelete = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2> Contacts</h2>
      <Filter handleChange={handleChange} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </Container>
  );
};
