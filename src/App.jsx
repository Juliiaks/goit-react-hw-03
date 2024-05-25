
import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/contactList/contactList'
import SearchBox from './components/searchBox/searchBox';
import ContactForm from './components/contactForm/contactForm';
import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts")
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return initialContacts
  }
  );
  const [filter, setFilter] = useState("")
  const handleChange = (evt) => {
    setFilter(evt.target.value)
  }

  const addContact = (newContact)  => {
    setContacts((prevContacts) => {
return[...prevContacts, newContact]
    }
    )}
  
  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  } 
  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts) )
  },[contacts])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
      onAdd={addContact}
      />
      <SearchBox
        filter={filter}
        handleChange={handleChange}
      />
      <ContactList
        contact={visibleContacts}
      onDelete={deleteContact}
      />
      
    </div>
  )
}

export default App
