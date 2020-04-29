import React, {Component} from 'react';
// import reactDOM from 'react-dom';
import './DashboardStyle.css';
import EssentialCard from './EssentialCard';
// import DashboardCard from './DashboardCard'

class SingleCard extends Component {
constructor(props){
    super(props);
    this.state = {
        items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

}

addItem(e) {
    if (this.inputElement.value !== '') {
        const newItem = {
            text: this.inputElement.value,
            key: Date.now()
        };
       this.setState((prevState) => {
           return {
               items: prevState.items.concat(newItem)
           };
       });
    }
    this.inputElement.value = '';
    console.log(this.state.items);
    e.preventDefault();
}

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return(
            <div className='container-fluid'>
            <div className="card-2 text-center">
                <div className="overflow">
                    <img src={''} alt='' className='card-img-topf'/>
                    </div>
                        <div className='card-body'>
                        <h3 className='card-title'>{''}this is where the title of the card will go.</h3>
                        <p className='card-text text-secondary'>{''}
                        This is where the text for the card will go. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae earum quae quo dolorum natus soluta libero odio recusandae minima.
                        </p>
                        <form onSubmit={this.addItem}>
                        <input ref={(a) => this.inputElement = a} 
                        placeholder='Inspiration'>
                        </input>
                        <button type='submit'>Add</button>
                        {/* <DashboardCard /> */}
                        <EssentialCard entries={this.state.items}
                                        delete={this.deleteItem}
                        />  
                    </form>
                </div>
            </div>
            </div>
            // <div className='className="card text-center'>
            //     <div className='head'>
            //         <form onSubmit={this.addItem}>
            //             <input ref={(a) => this.inputElement = a} 
            //                 placeholder='Inspiration'>
            //             </input>
            //             <button type='submit'>Add</button>
            //             {/* <DashboardCard /> */}
            //             <EssentialCard entries={this.state.items}/>  
            //         </form>
            //     </div>
            // </div>
        )
    }
}

export default SingleCard;