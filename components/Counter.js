import React, { useState, Component } from 'react';
import {Text, Button, View} from 'react-native';

class Counter extends Component {
    state = {
        count: 0
    }

    updateCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    /*
    constructor(){
        super();
        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter(){
        this.setState({
            count: this.state.count + 1
        });
    }*/
    
    render() {
        return(
            <View>
                {/* Para poder usar JSX hay que importar React from 'react'
                y tanto el javascript como las demas etiquetas se deben
                escribir dentro de un elemento padre, en este caso
                el elemento padre es <View>*/}
                <Text>Counter: {this.state.count}</Text>
                <Button title='increment' onPress={this.updateCounter}></Button>
            </View>
        );
    }
}

/*
function Counter() {
    const [count, setCount] = useState(0);

    function updateCounter(){
        setCount(count + 1);
    }

    return(
        <View>
            <Text>counter: {count}</Text>
            <Button title='increment' onPress={updateCounter}></Button>
        </View>
    );
}
*/

export default Counter;