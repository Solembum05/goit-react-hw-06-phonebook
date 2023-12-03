import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('tasks/addContact');

export const deleteContact = createAction('tasks/deleteContact');


const contactsInitialState = [];

export const contactReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {})
    .addCase(deleteContact, (state, action) => {});
});