import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../global.js";

const Middle = () => {
    const navigation = useNavigation();

    const navicgpa = () => {
        navigation.navigate('Cgpa')
    }

    const [id, setId] = useState('');
    const [stud, setStud] = useState({});

    useEffect(() => {
        getid();
    }, []);

    useEffect(() => {
        if (id !== '') {
            fetchStud();
        }
    }, [id]);

    const getid = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            if (userId) {
                setId(userId);
            }
        } catch (error) {
            console.error('Error getting user ID from AsyncStorage:', error);
        }
    }

    const fetchStud = async () => {
        try {
            const response = await fetch(`${BASE_URL}/getStudent/${id}`, {
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
                setStud(data);
            } else {
                console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const navilinks = () => {
        navigation.navigate('ProfileLinks')
    }

    return (
        <>

            <View style={styles.main}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/user.jpeg")} />
                    <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
                        John Doe
                    </Text>
                    <Text style={{ fontSize: 18, color: "black", fontWeight: "500" }}>
                        doe@tsec.edu
                    </Text>
                </View>

                <View style={styles.middleSectionTextContainer}>
                    <Text style={styles.dataText}>First Name : John</Text>
                    <Text style={styles.dataText}>Last Name : Doe</Text>
                    <Text style={styles.dataText}>Email : johndoe@example.com</Text>
                    <Text style={styles.dataText}>College Name : TSEC</Text>
                    <Text style={styles.dataText}>Branch : Computer</Text>
                    <Text style={styles.dataText}>Roll no : 2103153</Text>
                    <Text style={styles.dataText}>PRN no : 382642792</Text>
                    <Text style={styles.dataText}>College Email : doe@tsec.edu</Text>
                    <TouchableOpacity style={styles.btn} onPress={navicgpa}>
                        <Text style={styles.btnText}>View Semester CGPA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={navilinks}>
                        <Text style={styles.btnText}>View Links</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}

export default Middle

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginBottom: 5,
    },
    middleSectionTextContainer: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: 40,
        backgroundColor: "#dbdbdb",
        borderRadius: 10,
        padding: 10
    },
    dataText: {
        fontSize: 20,
        color: "black",
        fontWeight: "400",
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 10
    },
    btn: {
        backgroundColor: "rgb(110, 142, 251)",
        paddingHorizontal: 70,
        paddingVertical: 12,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10
    },
    btnText: {
        fontWeight: "600",
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
});