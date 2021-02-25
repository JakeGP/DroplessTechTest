// Default
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Theme
import Theme from '../../styles/theme'

const EmailBox = (props) =>
{
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 30,
        borderRadius: 10,
        backgroundColor: '#70d6ff',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: Theme.FONT_SIZE_SMALL,
    }
});

export default EmailBox;