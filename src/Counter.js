import React from 'react';


const ErrorComponent = () => <div>{props.ignore}</div>

class CounterComponent extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = { 
            count: 0,
            seed: 0,
        }
    }

    increment = () => this.setState({count: this.state.count+1});
    decrement = () => this.setState({count: this.state.count-1});


    // getDerivedStateFromProps is not working here ?????
    static getDerivedStateFromProps(props, state) { 
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null; 
    }

    componentDidMount() {
        console.log("Component Did Mount");
        console.log("-----------------------------------");
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("Should Component Update - DO NOT RENDER");
            console.log("-----------------------------------");

            return false;
        }

        console.log("Should Component Update - RENDER");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get Snapshot Before Update");
        return null;
    }

    render() { 
        console.log("render");
        if(this.props.ErrorComponent && this.state.error) {
            return <div>We have incounter an error!!{this.state.error.message}</div>
        }
        return ( 
            <div>
                <button onClick = {this.increment}>Increment</button>
                <button onClick = {this.decrement}>Decrement</button>
                <div>
                    Counter: {this.state.count}
                </div>
                {this.props.showErrorComponent ? <ErrorComponent />: null}
            </div>
         );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did Update");
        console.log("-----------------------------------");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        console.log("-----------------------------------");
    }

    componentDidCatch(error, info) {
        console.log('Component did Catch');
        this.setState({error, info});
    }
}
 
export default CounterComponent;