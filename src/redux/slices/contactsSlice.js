import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const contactsInitialState = { items: [], isLoading: false, error: null };

const extraActions = [addContact, deleteContact, fetchContacts];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const indexContact = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(indexContact, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
