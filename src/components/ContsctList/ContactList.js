import ContactItem from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContact = () => {
    return contactsList.filter(el => el.name.toLowerCase().includes(filter));
  };

  console.log(filter);

  // if (getFilteredContact()) {
  //   contacts = getFilteredContact;
  // } else {
  //   contacts = contactsList;
  // }
  return (
    <ul className={css.contactlist}>
      {contactsList.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
