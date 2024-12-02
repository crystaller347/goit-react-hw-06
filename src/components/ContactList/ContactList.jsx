import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
    const selectContacts = useSelector(state => state.contacts.items);

    return (
        <ul className={css.list}>
            {selectContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact}></Contact>
                </li>
            ))}
        </ul>
    )
}