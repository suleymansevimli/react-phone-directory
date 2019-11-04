import React from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends React.Component{

    static propTypes = {
        contacts : PropTypes.array.isRequired,
    };

    state = {
        filterText : ''
    };


    onChangeFilterText = (e) => {
        this.setState({
            filterText : e.target.value
        })

        console.log(this.state.filterText)
    };

    render(){


        const filteredContacts = this.props.contacts.filter(
            (contact )=> {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLocaleLowerCase()
                ) !== -1
            }
        );


        return(
            <div className={"listArea"}>
                <input value={this.state.filterText} onChange={this.onChangeFilterText}  name={"filter"} id={"filter"} placeholder={'Filter phone or name'}/>
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

}

export default List;