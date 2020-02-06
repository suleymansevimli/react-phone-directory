import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form';



const Contacts = (props) =>
    <div>
        <h1>Directory</h1>
        <List contacts={props.contacts} />
        <Form contacts={props.contacts} addContact={props.addContact} />
    </div>


Contacts.propTypes = {
    contacts : PropTypes.array.isRequired,
    addContact : PropTypes.func
};

export default Contacts;