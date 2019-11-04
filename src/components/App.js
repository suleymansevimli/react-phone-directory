import React from 'react';
import './App.css';
import Contact from './Contacts';

class  App extends React.Component {

  constructor(){
    super();
    this.addContact = this.addContact.bind(this)
  }


  state = {
    contacts : [
    {
        name: 'Test Name 1',
        phone : '12312313'
    },
    {
        name: 'Test Name 2',
        phone : '9876554133'
    },
    {
        name: 'Test Name 3',
        phone : '456413441231'
    },
  ]
};


  addContact(contact){
    const {contacts} = this.state;
    contacts.push(contact);

    this.setState({
      contacts
    })
  }



  render(){
    return (
      <div className="App">
        <Contact addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
