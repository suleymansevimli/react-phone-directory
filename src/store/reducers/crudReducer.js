import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crudReducer",
  initialState: {
    contacts: [
      { id: 1, name: "Joe Doe", phone: "1234567890" },
      { id: 2, name: "Micheal Jordan", phone: "0987654321" },
      { id: 3, name: "Nicola Tesla", phone: "1122334455" }
    ]
  },
  reducers: {
    deleteContact(state, action) {
      let filteredContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.contacts = filteredContacts;
    },
    addContact(state, action) {
      console.log(action.payload);
      state.contacts.push(action.payload);
    }
  }
});
export const { deleteContact, addContact } = crudSlice.actions;
export default crudSlice.reducer;
