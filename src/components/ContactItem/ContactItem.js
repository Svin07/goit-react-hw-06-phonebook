import { useDispatch, useSelector } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { useEffect } from 'react';

export default function ContactItem() {
  const { contacts, filter } = useSelector(store => store);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const returnFilteredContact = (arr, str) => {
    const filteredContacts = arr.filter(el =>
      el.name.toLowerCase().includes(str)
    );
    return filteredContacts;
  };

  useEffect(() => {
    returnFilteredContact(contacts, filter);
  }, [contacts, filter]);

  return filter
    ? returnFilteredContact(contacts, filter).map(contact => (
        <li key={contact.id} className={css.contact}>
          <h5 className={css.text}>{contact.name}:</h5>
          <p className={css.text}>{contact.number}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => handleDelete(contact.id)}
          >
            X
          </button>
        </li>
      ))
    : contacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          <h5 className={css.text}>{contact.name}:</h5>
          <p className={css.text}>{contact.number}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => handleDelete(contact.id)}
          >
            X
          </button>
        </li>
      ));
}
