

import { Container } from './App.styled';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/Filter';


export const App = () => {
   return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter  />
      <ContactList
           />
    </Container>
  );
};
