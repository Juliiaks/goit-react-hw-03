import Contact from "../contact/contact";
import css from './contactList.module.css'

export default function ContactList({contact}) {
    return (
        <ul className={css.list}>
            {contact.map(({id, name, number}) => (
            <li key={id} className={css.listItem}><Contact
                name={name}
                phone={number}
                /></li>
           ))} 
        </ul>
    )
}