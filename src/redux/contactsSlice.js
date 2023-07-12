import { createSlice } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts) || [];

const initialState = parsedContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    deleteContact: (state, action) => {
      state = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
