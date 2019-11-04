import React from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends React.Component{

    static propTypes = {
        contacts : PropTypes.array.isRequired,
    };

    state = {

    };

    render(){
        return(
            <div className={"listArea"}>
                <input name={"filter"} id={"filter"} placeholder={'Filter phone or name'}/>
                <ul className={"list"} >
                    {
                        this.props.contacts.map(contact => {
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