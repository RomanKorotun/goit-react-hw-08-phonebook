import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
import { logout } from 'redux/auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoadingAdd: false,
    isLoadingDelete: false,
    errorAdd: false,
    errorDelete: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.errorAdd = false;
        state.isLoadingAdd = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoadingAdd = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContact.rejected, state => {
        state.isLoadingAdd = false;
        state.errorAdd = true;
      })
      .addCase(deleteContact.pending, state => {
        state.errorDelete = false;
        state.isLoadingDelete = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoadingDelete = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.isLoadingDelete = false;
        state.errorDelete = true;
      })
      .addCase(logout.fulfilled, state => {
        state.contacts = [];
      }),
});

export const contactsReducer = contactsSlice.reducer;
