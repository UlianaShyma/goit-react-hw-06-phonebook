import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onHadleChange = event => {
    dispatch(setFilter(event.currentTarget.value.trim()));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="name"
        onChange={onHadleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
};
