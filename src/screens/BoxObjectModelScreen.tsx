import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');

const BoxObjectModelScreen = () => {

    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={style.container}>
                <View style={{
                    ...style.cajaMorada,
                    width : width * .5
                }} />
                <View style={style.cajaNaranja} />
            </View>
            <Text style={style.title}>W: {width}, H : {height} </Text>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },

    title : {
        fontSize : 20,
        textAlign :'center'
    }


})

export default BoxObjectModelScreen


