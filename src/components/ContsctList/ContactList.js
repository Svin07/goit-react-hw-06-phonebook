import ContactItem from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

function ContactList() {
  return (
    <ul className={css.contactlist}>
      <ContactItem />
    </ul>
  );
}

export default ContactList;
