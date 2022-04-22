import React, {Component, useState} from 'react';
import {Text, View, Button} from 'react-native';

/*
class PropsManipulation extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            value: 0
            //si o si se debe usar this.props.name
            //usar props.name podría ocasionar problemas
        };
    }

    /*
    componentDidMount = () =>{
        this.setState({
            value: this.props.value
        });
    }
    

    componentDidUpdate = () =>{
        console.log("UPDATE");
    }

    updateName = () =>{
        this.setState({
            name: (this.props.name)
        });
    }

    render() {
        return(
            <View>
                <Text>Name: {this.state.name}</Text>
                <Text>Value: {this.state.value}</Text>
                <Button title="update name" onPress={this.updateName}></Button>
            </View>
        );
    }
}*/

const PropsManipulation = (props) =>{
    const[name, setName] = useState(props.name);
    const[value, setValue] = useState(props.value);

    const updateAll = () => {
        setName("se actualizó el nombre");
        setValue(value + 1);
    }

    return(
        <View>
            <Text>Name: {props.name}</Text>
            <Text>Value: {props.value}</Text>
            <Text>State: [ name: {name}, value: {value} ]</Text>
            <Button title='update state' onPress={updateAll}></Button>
        </View>
    );
}

export default PropsManipulation;