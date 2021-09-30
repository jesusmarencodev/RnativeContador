import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';


interface Props {
    title: string;
    position: 'br' | 'bl';
    onPress: () => void;

}

const Fab = ({ title, position = 'br', onPress }: Props) => {


    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.fabLocation,
                (position === 'bl') ? styles.left
                    : styles.rigth
                ]}
                onPress={onPress}
            >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>

            </TouchableOpacity>
        )
    }


    const android = () => {
        return (
            <View
                style={[styles.fabLocation,
                (position === 'bl') ? styles.left
                    : styles.rigth
                ]}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#28425B', true, 30)}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        )
    }



    return (Platform.OS === 'android') ? android() :  ios();
}

export default Fab



const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 20,
        right: 10,
    },
    rigth: {
        right: 10,
    },
    left: {
        left: 10,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 2,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

})