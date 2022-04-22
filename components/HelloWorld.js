import {Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function HelloWorld(props){
    
    const palabra = props.cadena;
    const [boton, setBoton] = useState(true);
    const [tituloBoton, setTituloBoton] = useState("verdadero");

    const cambiarBoton = () => {
        if(boton){
            setBoton(false);
            setTituloBoton("falso");
        }else{
            setBoton(true);
            setTituloBoton("verdadero");
        }
    }

    const otroBotonHandler = () => {
        console.log("ha presionado otro boton");
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={{uri: "https://wallpaperaccess.com/full/4413422.jpg"}} resizeMode='cover' style={styles.image}>
                <Text style={styles.text}>Hola {palabra}</Text>
                <Button title={tituloBoton} onPress={cambiarBoton} color={boton ? "green" : "red"}/>
                <TouchableOpacity style={styles.boton} onPress={otroBotonHandler}>
                    <Text>acepta más estilos css</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    boton: {
        alignItems: "center",
        backgroundColor: "lightgreen",
        padding: 15,
        width: 220,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        borderRadius: 20
    }
});