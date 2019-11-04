import React from 'react';
import List from './List';


class Contacts extends React.Component{

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

    render(){
        return(
            <div>
                <h1>Telefon Rehberi</h1>
               <List contacts={this.state.contacts}/>
            </div>
        )
    }

}

export default Contacts;