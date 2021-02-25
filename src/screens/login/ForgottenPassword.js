// Default
import React, { useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native'; 

// Components
import EmailBox from '../../components/input/EmailBox';
import Button from '../../components/buttons/DefaultButton';

// Theme
import Theme from '../../styles/theme';

const ForgottenPasswordScreen = ({ navigation }) =>
{
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const showEmailText = () =>
    {
        Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
        setTimeout(() =>
        {
            Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true }).start();
        }, 2000);
    }   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Enter your email.</Text>
            <EmailBox />
            <Button onPress={showEmailText} title='Send password reset email' />
            <Animated.Text style={[styles.emailSent, { opacity: fadeAnim }]}>Email Sent!</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        color: Theme.FONT_COLOR,
        fontSize: Theme.FONT_SIZE_MEDIUM,
        fontWeight: Theme.FONT_WEIGHT_BOLD,
    },
    emailSent: {
        color: Theme.FONT_COLOR,
        fontSize: Theme.FONT_SIZE_TINY
    },
})
 
export default ForgottenPasswordScreen; 