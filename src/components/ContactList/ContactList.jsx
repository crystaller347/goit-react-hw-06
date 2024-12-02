import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
    const selectContacts = useSelector(state => state.contacts.items);
    const selectNameFilter = useSelector(state => state.filters.name);

    const filteredContacts = selectContacts.filter((contact) => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()))

    return (
        <ul className={css.list}>
            {filteredContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact}></Contact>
                </li>
            ))}
        </ul>
    )
}