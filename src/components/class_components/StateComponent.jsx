import React from "react";

class StateComponent extends React.Component{
    constructor()
    {
        super()//act as constructor//react.com[parent],statecomponent[child]
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }

    changeState =() => {
        console.log("kongu enginerring college");//use state should be used when we comes to use
        
    }
    render()
    {
        return(
            <div>
                <h1>
                    This is state component.  
                </h1>
                <h2>
                    Hello, {this.state.name} <br></br> This is {this.state.course} class
                </h2>
                <h3>I am changing the state of the {this.state.name} to {this.changeState}</h3>
                <button onClick={this.changeState}>Click me to Change the State</button>
            </div>
        )
            
    }
}
export default StateComponent;