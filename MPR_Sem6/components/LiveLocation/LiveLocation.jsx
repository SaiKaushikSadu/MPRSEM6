import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

const LiveLocation = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Fetching Your Location..';
    let latitude
    let longitude
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        latitude = JSON.stringify(location.coords.latitude);
        longitude = JSON.stringify(location.coords.longitude);

    }

    return (
        <>

            <View style={styles.Loccontainer}>
                <Text style={styles.LPara}>{text}</Text>
                <Text style={styles.LPara}>Latitude : {latitude}</Text>
                <Text style={styles.LPara}>Longitude : {longitude}</Text>
                {/* <Text style={styles.LPara}>{text.coords.latitude}</Text> */}
            </View>

        </>
    )
}

export default LiveLocation

const styles = StyleSheet.create({
    Loccontainer: {
        flex: 1,
        alignContent: "center",
        padding: 20,
        paddingTop: 80,
    },
    LPara: {
        fontSize: 34,
        fontWeight: "600",
    }
});