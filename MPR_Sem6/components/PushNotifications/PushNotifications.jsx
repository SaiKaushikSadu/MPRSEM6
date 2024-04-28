import React from 'react'
import { Alert, Text, TouchableOpacity, View, Platform } from 'react-native'
import { useState, useEffect } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const PushNotifications = () => {

    const [expoPushToken, setExpoPushToken] = useState('');

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then((token) => { setExpoPushToken(token) })
            .catch((err) => console.log(err))
    }, []);

    async function registerForPushNotificationsAsync() {
        let token;

        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            // Learn more about projectId:
            // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
            token = (await Notifications.getExpoPushTokenAsync({ projectId: 'b9b37ab2-d745-4af9-9af0-701bc847fa6b' })).data;
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        return token;
    }

    const pushnotify = async () => {
        const message = {
            to: expoPushToken,
            sound: "default",
            title: "Hey Buddy...",
            body: "You are in your college..So please put your phone on silent"
        };

        const response = await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "accept-encoding": "gzip, deflate",
                "content-type": "application/json"
            },
            body: JSON.stringify(message)
        });

        // Assuming you want to do something with the response, you can await and process it accordingly
        const responseData = await response.json();
        console.log(responseData);
    }


    return (
        <>
            <View style={{ marginTop: 100 }}>
                <Text>Expo Push</Text>
                <TouchableOpacity onPress={pushnotify}><Text>Push</Text></TouchableOpacity>
            </View>
        </>
    )
}

export default PushNotifications