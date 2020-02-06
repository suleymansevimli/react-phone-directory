import React, { useState } from 'react';
import './List.css';

const List = (props) => {



    const [filterText, setFilterText] = useState("");


    const onChangeFilterText = (e) => {
        setFilterText(e.target.value);
    };

    const filteredContacts = props.contacts.filter(
        (contact) => {
            return contact.name.toLowerCase().indexOf(
                filterText.toLocaleLowerCase()
            ) !== -1
        }
    )


    return (
        <div className={"listArea"}>
            <input value={filterText} onChange={onChangeFilterText} name={"filter"} id={"filter"} placeholder={'Filter phone or name'} />
            <ul className={"list"} >
                {
                    filteredContacts.map(contact => {
                        return <li key={contact.phone}>
                            <span className={"name"}> {contact.name} </span>
                            <span className={"phone"}> {contact.phone}  </span>
                            <span className={"clearfix"}></span>
                        </li>
                    })
                }
            </ul>
        </div>
    )


}

export default List;