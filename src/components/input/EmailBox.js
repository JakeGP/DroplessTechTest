// Default
import React, {useState} from 'react';
import { TextInput } from 'react-native';

// Styles
import Style from '../../styles/input/InputBox';

const EmailBox = (props) =>
{  
    const [emailOk, setEmailOk] = useState(true);
    
    // Check if email is valid
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const checkEmail = (val) =>
    {
        setEmailOk(val.length ? regex.test(val.toLowerCase()) : true)
        if (props.onChangeText) { props.onChangeText(val); }
        if (props.onCheckEmail) { props.onCheckEmail(emailOk); }
    }

    return (
        <TextInput
            placeholder='Email'
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCompleteType='email'
            onChangeText={checkEmail}
            secureTextEntry={false}
            autoCapitalize='none'
            style={emailOk ? Style.active : Style.error}
        />  
    );
}

export default EmailBox;