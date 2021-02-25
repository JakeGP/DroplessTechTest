// Default
import React, { useState, useEffect } from 'react';
import { Animated, View, Text, Image, StyleSheet } from 'react-native'; 

// Components
import EmailBox from '../../components/input/EmailBox';
import PasswordBox from '../../components/input/PasswordBox';
import LoginButton from '../../components/buttons/DefaultButton';

// Theme
import Theme from '../../styles/theme';

const LoginScreen = ({ navigation }) =>
{
    // Animation variables
    const logoPosition = new Animated.Value(-200);
    const formOpacity = new Animated.Value(0);
    const errorOpacity = new Animated.Value(0);

    // Form states
    const [ error, setError ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ emailOk, setEmailOk ] = useState(false);
    const [ password, setPassword ] = useState("");

    // Page load effect
    useEffect(() =>
    {
        setTimeout(() =>
        {
            Animated.parallel([
                Animated.timing(logoPosition, { toValue: 0, duration: 1000, useNativeDriver: false }),
                Animated.timing(formOpacity, { toValue: 1, duration: 1000, useNativeDriver: true })
            ]).start();
        }, 2000)
    }, [])

    // Validate the form
    const validateForm = () =>
    {
        // Validate inputs
        let error = false;
        if (!email.trim())
        {
            setError("Please enter your email address");
            error = true;
        }
        if (!password.trim()) 
        {
            if (error) { setError("Please enter your email and password"); }
            else { setError("Please enter your password"); }
            error = true;
        }
        if (email.trim() && !emailOk)
        { 
            setError("Please enter a valid email address");
            error = true;
        }

        // Show error message
        if (error)
        {
            Animated.timing(errorOpacity, { toValue: 1, duration: 300, useNativeDriver: true }).start();
            setTimeout(() =>
            {
                Animated.timing(errorOpacity, { toValue: 0, duration: 1000, useNativeDriver: true }).start();
            }, 1000);
        }
        else
        {
            // Continue into app
            navigation.navigate('Home');
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View style={[styles.imageWrapper, { marginBottom: logoPosition }]}>
                <Image width='1scale0' style={styles.image} source={require('../../assets/images/logo-dark-text.png')} />
                <Text style={styles.title}>Tech Test App</Text>
            </Animated.View>  
            <Animated.View style={[ styles.form, { opacity: formOpacity} ]}>
                <Animated.Text style={[styles.error, { opacity: errorOpacity }]}>{error}</Animated.Text>
                <EmailBox onChangeText={setEmail} onCheckEmail={(value) => setEmailOk(value)}/>
                <PasswordBox onChangeText={setPassword}/>
                <LoginButton onPress={validateForm} title='Login'/>
                <Text onPress={() => navigation.navigate('ForgottenPassword')} style={styles.forgottenPassword}>Forgot your password?</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        width: '100%',
        opacity: 0
    }, 
    forgottenPassword: {
        fontSize: Theme.FONT_SIZE_TINY
    },
    error: {
        marginBottom: 20,
        color: Theme.FONT_COLOR,
        fontSize: Theme.FONT_SIZE_SMALL,
        fontWeight: Theme.FONT_WEIGHT_MEDIUM,
    },
    imageWrapper: {
        alignItems: 'center',
        width: '100%',
        zIndex: 1
    },
    title: {
        marginVertical: 20,
        color: Theme.FONT_COLOR,
        fontSize: Theme.FONT_SIZE_LARGE,
        fontWeight: Theme.FONT_WEIGHT_BOLD,
    }, 
    image: {
        resizeMode: 'contain'
    }
})
 
export default LoginScreen; 