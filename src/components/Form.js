import React, { useState } from "react";

const Form = props => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setID] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.addContact({ id, name, phone });

    setID("");
    setName("");
    setPhone("");
    document.getElementById("id").focus();
  };

  return (
    <div>
      <form>
        <input
          name="id"
          id="id"
          placeholder="Enter id"
          onChange={e => setID(e.target.value)}
          value={id}
        />
        <br />
        <input
          name="name"
          id="name"
          placeholder="Enter name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          name="phone"
          id="phone"
          placeholder="Enter phone"
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />
        <br />
        <button className={"addBtn"} onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
