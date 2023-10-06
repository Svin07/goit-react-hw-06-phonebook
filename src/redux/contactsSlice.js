import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      prepare: text => {
        const id = nanoid();
        return { payload: { id, ...text } };
      },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// reducers: {
//   deleteContact: (state, action) => {
//     state.contacts = state.contacts.filter(el => el.id !== action.payload)
//   },
//   addContact: (state, action) => {
//     state.contacts = [...state.contacts, action.payload]
//   },
// },
