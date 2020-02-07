import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Contacts";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../store/reducers/crudReducer";

const App = () => {
  const contacts = useSelector(state => state.crud.contacts);
  const dispatch = useDispatch();

  const [count, counter] = useState(1);

  useEffect(() => {
    document.title = `Click counter ${count}`;
  });

  const addContactHandler = contact => {
    dispatch(addContact(contact));
  };

  const counterUp = () => {
    counter(count + 1);
  };

  const counterDown = () => {
    counter(count - 1);
  };

  return (
    <div className="App">
      <Contact addContact={addContactHandler} contacts={contacts} />

      <div style={styles.counterWrapper}>
        <p style={styles.count}>{count}</p>
        <button style={styles.downButton} onClick={counterDown}>
          Counter Down
        </button>

        <button style={styles.upButton} onClick={counterUp}>
          Counter Up
        </button>
      </div>
    </div>
  );
};

export default App;

const styles = {
  counterWrapper: {
    margin: "0 auto",
    marginTop: 10,
    width: 250,
    border: "1px solid #ddd",
    padding: 20
  },
  count: {
    margin: "0 auto",
    marginBottom: 15,
    border: "1px solid #ddd",
    width: 15,
    height: 15,
    padding: 10,
    borderRadius: "100%"
  },
  upButton: {
    backgroundColor: "lightgreen",
    color: "#000",
    padding: 10,
    margin: 5,
    cursor: "pointer",
    border: "none",
    display: "inline"
  },
  downButton: {
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
    margin: 5,
    cursor: "pointer",
    border: "none",
    display: "inline"
  }
};
