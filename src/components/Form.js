import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component{


    constructor(){
        super();
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    static propTypes = {
        addContact : PropTypes.func
    };

    state = {
        name: '',
        phone : ''
    }

    onChange(e){
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
       this.props.addContact({
           ...this.state
       })

       this.setState({
           name:'',
           phone : ''
       });
       document.getElementById('name').focus();
    }

    render(){
        return(
        <div>
            <form>
                <input name="name" id="name" placeholder="Enter name" onChange={this.onChange} value={this.state.name} /> <br/>
                <input name="phone" id="phone" placeholder="Enter phone" onChange={this.onChange} value={this.state.phone} /> <br/>
                <button className={"addBtn"}  onClick={this.onSubmit} >Add</button>
            </form>
        </div>
        )
    }

}

export default Form;