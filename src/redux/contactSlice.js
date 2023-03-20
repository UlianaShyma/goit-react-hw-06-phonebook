import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const contactsConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  contactsConfig,
  contactsReducer
);
