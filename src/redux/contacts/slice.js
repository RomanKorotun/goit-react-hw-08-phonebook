import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
import { logout } from 'redux/auth/operations';
const handlerPending = state => {
  state.error = false;
  state.isLoading = true;
};
const handlerRejected = state => {
  state.isLoading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handlerRejected)
      .addCase(addContact.pending, handlerPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContact.rejected, handlerRejected)
      .addCase(deleteContact.pending, handlerPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handlerRejected)
      .addCase(logout.fulfilled, state => {
        state.contacts = [];
      }),
});

export const contactsReducer = contactsSlice.reducer;