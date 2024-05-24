
import { useState } from 'react'
import './App.css'
import ContactList from './components/contactList/contactList'
import SearchBox from './components/searchBox/searchBox';
import ContactForm from './components/contactForm/contactForm';
import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("")
  const handleChange = (evt) => {
    setFilter(evt.target.value)
  }

  const addContact = (newContact)  => {
    setContacts((prevContacts) => {
return[...prevContacts, newContact]
    }

    )
 }
const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

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
        contact={visibleContacts} />
      
    </div>
  )
}

export default App
