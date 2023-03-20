import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section, MainTitle, ContactTitle } from './App.styled';

export const App = () => {
  return (
    <>
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
