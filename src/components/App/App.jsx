import { useState, useEffect } from 'react';
import css from './App.module.css';
import contactsData from "../../contactsData.json";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts")
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return contactsData;
  })

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}
