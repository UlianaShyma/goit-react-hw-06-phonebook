import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { deleteContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterQuery = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const normalisedFilter = filterQuery.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <List>
      {filteredContacts?.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
