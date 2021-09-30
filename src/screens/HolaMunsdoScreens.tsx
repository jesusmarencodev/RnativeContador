import React from 'react'
import { View, Text } from 'react-native';

const HolaMunsdoScreens = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text
                style={{
                    fontSize: 45,
                    textAlign: 'center'
                }}
            >Hola Mundo</Text>
        </View>
    )
}

export default HolaMunsdoScreens
