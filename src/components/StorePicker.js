import React from 'react';
import {getFunName} from'../helpers';

class StorePicker extends React.Component{

    // constructor(){
    //     //super renders the component first, and you can do custom things after super
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event){
        event.preventDefault();
        console.log(this.storeInput.value);
        //first grab text from input field
        //second, transisiton from '/' to '/store-id'/
    }


    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)} >
                {/* test comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store -></button>

            </form>

        )
    }
}

export default StorePicker;