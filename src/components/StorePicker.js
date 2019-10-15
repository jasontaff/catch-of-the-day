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
      
        //first grab text from input field
        const storeId = this.storeInput.value;
        console.log(storeId);
    
        this.context.router.transitionTo('/store/');

        //second, transisiton from '/' to '/store-id'/
      
    }


    render(){
        return (
            <form className="store-selector" onSubmit={(e)=> this.goToStore(e)} >
                {/* test comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store -></button>

            </form>

        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;