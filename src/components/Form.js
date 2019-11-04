import React from 'react';

class Form extends React.Component{

    render(){
        return(
        <div>
            <form>
                <input name="name" id="name" placeholder="Enter name" /> <br/>
                <input name="phone" id="phone" placeholder="Enter phone" /> <br/>
                <button className={"addBtn"} >Add</button>
            </form>
        </div>
        )
    }

}

export default Form;