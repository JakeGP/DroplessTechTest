// Default
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Platform } from 'react-native'; 
import MapView, { Marker } from 'react-native-maps';
import Geolocation, { watchPosition } from 'react-native-geolocation-service';

// Theme
import Theme from '../styles/theme';

const HomeScreen = ({ navigation }) =>
{
    const [location, setLocation] = useState({ latitude: 51.500149, longitude: -0.12624 });

    // Enable watching
    useEffect(() =>
    {
        const watchId = Geolocation.watchPosition((position) =>
        {
            setLocation(position.coords);
        }, (error) =>
        {
            console.log(`Code: ${error.code}: ${error.message}`);
        },
        {
            enableHighAccuracy: true,
            distanceFilter: 0,
            interval: 1000,
            fastestInterval: 900
        });     
        return () => { if (watchId) { Geolocation.clearWatch(watchId); }; }
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text style={styles.helloWorld}>Hello World!</Text>
            <View style={{ flex: 1, width: '100%', padding: 20 }}>
                <MapView style={styles.map} region={{ latitude: location?.latitude, longitude: location?.longitude, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
                    <Marker coordinate={{ latitude: location?.latitude, longitude: location?.longitude }} title="Hello World!"/>
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    helloWorld: {
        fontSize: Theme.FONT_SIZE_LARGE,
        fontWeight: Theme.FONT_WEIGHT_BOLD,
        marginTop: 80
    },
    map: {
        flex: 1,
        padding: 20,
        width: '100%',
        borderRadius: 10
    }
})
 
export default HomeScreen; 