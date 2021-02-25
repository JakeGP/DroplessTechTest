// Default
import React from 'react';
import { TextInput } from 'react-native';

// Styles
import Style from '../../styles/input/InputBox';


const PasswordBox = (props) =>
{
    return (
        <TextInput
            placeholder='Password'
            textContentType='password'
            autoCompleteType='password'
            secureTextEntry={true}
            onChangeText={props.onChangeText}
            autoCapitalize='none'
            style={Style.active}
        />  
    );
}

export default PasswordBox;