import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component{

    static propTypes = {
        
    };

    state = {

    };

    render(){
        return(
            <div>
                <input name={"filter"} id={"filter"} placeholder={'Filter phone or name'}/>
                <ul>

                </ul>
            </div>
        )
    }

}

export default List;