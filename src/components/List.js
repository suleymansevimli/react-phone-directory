import React, { useState } from "react";
import "./List.css";
import { deleteContact } from "../store/reducers/crudReducer";
import { useDispatch, useSelector } from "react-redux";

const List = props => {
  const state = useSelector(state => state.crud.contacts);
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");

  const onChangeFilterText = e => {
    setFilterText(e.target.value);
  };

  const filteredContacts = state.filter(contact => {
    return (
      contact.name.toLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1
    );
  });

  return (
    <div className={"listArea"}>
      <input
        value={filterText}
        onChange={onChangeFilterText}
        name={"filter"}
        id={"filter"}
        placeholder={"Filter phone or name"}
      />
      <ul className={"list"}>
        {filteredContacts.map((contact, i) => {
          return (
            <li key={i} onClick={() => dispatch(deleteContact(contact.id))}>
              <span className={"name"}> {contact.id} - &nbsp;</span>
              <span className={"name"}> {contact.name} </span>
              <span className={"phone"}> {contact.phone} </span>
              <span className={"clearfix"}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
