import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Contacts";

const App = () => {

  const [contacts, setContact] = useState([
    { name: "Joe Doe", phone: "1234567890" },
    { name: "Micheal Jordan", phone: "0987654321" },
    { name: "Nicola Tesla", phone: "1122334455" }
  ]);

  const [count, counter] = useState(1);

  useEffect(() => {
    document.title = `Click counter ${count}`;
  });

  const addContact = contact => {
    setContact(contact);
  };

  const counterUp = () => {
    counter(count + 1);
  };

  const counterDown = () => {
    counter(count - 1);
  };

  return (
    <div className="App">
      <Contact addContact={addContact} contacts={contacts} />

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
