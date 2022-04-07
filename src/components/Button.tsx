import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

// The TouchableOpacityProps is a Interface has the all of TouchableOpacity properties 
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...r }: ButtonProps) {
    // the ...rest will take all of properties with type TouchableOpacity as dynamic form, so you take out tha activeOpacity and put in the Button from Home page
    // To take the handleAddNewSKill property you have to recive like { property } in Button function
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7} //It goes 0 to 1 of opacity, if you want more visibility after click you have to use a number close to 1
            {...r}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})