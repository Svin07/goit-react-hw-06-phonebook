import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contactlist}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;
