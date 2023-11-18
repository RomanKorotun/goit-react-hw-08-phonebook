import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.authKey.user;
export const selectIsLoggedIn = state => state.authKey.isLoggedIn;
export const selectIsRefreshing = state => state.authKey.isRefreshing;
export const selectErrorRegister = state => state.authKey.errorRegister;
export const selectErrorLogout = state => state.authKey.errorLogout;
export const selectErrorLogin = state => state.authKey.errorLogin;
export const selectIsLoadingRegister = state => state.authKey.isLoadingRegister;
export const selectIsLoadingLogin = state => state.authKey.isLoadingLogin;
export const selectIsLoadingLogout = state => state.authKey.isLoadingLogout;

export const selectLoadingAdd = state => state.contactsKey.isLoadingAdd;
export const selectIsLoadingDelete = state => state.contactsKey.isLoadingDelete;
export const selectContacts = state => state.contactsKey.contacts;
export const selectErrorAddContacts = state => state.contactsKey.errorAdd;
export const selectErrorDeleteContacts = state => state.contactsKey.errorDelete;
export const selectFilter = state => state.filterKey.filter;

export const selectorVisibleItems = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
