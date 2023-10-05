import ContactList from './ContsctList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filtersSlice';

export function App() {
  const { contacts } = useSelector(store => store);
  const dispatch = useDispatch();

  // console.log(filter);
  console.log(contacts);
  // const [contacts, setContacts] = useState(loadingContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  function createContact(body) {
    // const newContact = {
    //   id: nanoid(),
    //   ...body,
    // };
    // const isExist = contacts.find(
    //   el => el.name.toLowerCase() === body.name.toLowerCase()
    dispatch(addContact(body));
  }

  //   if (isExist) {
  //     alert(`${body.name} is already in contacts.`);
  //     return;
  //   } else {
  //     setContacts(prev => [...prev, newContact]);
  //   }
  // }

  const filterContact = filterQuery => dispatch(addFilter(filterQuery));

  // const handleDelete = id =>
  //   setContacts(prev => prev.filter(contact => contact.id !== id));

  // const getFilterAddContact = () => {
  //   return contacts.filter(el => el.name.toLowerCase().includes(filter));
  // };

  return (
    <div>
      <div
        style={{
          margin: 15,
          padding: '12px 16px',
          borderRadius: 4,
          backgroundColor: 'gray',
          color: 'white',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm createContact={createContact} />

        <h2>Contacts</h2>
        <Filter filterContact={filterContact} />
        <ContactList
          contacts={contacts}
          // handleDelete={handleDelete}
        ></ContactList>
      </div>
    </div>
  );
}
