import React, { Component } from 'react';

class EssentialCard extends Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item) {
    return <p onClick={() =>this.delete(item.key)}
              key={item.key}>{item.text}</p>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        const essentialEntry = this.props.entries;
        const listItems = essentialEntry.map(this.createTasks);
        return(
         
            <p className='theList'>
                {listItems}
            </p>
          

        )
    }
}

export default EssentialCard;

