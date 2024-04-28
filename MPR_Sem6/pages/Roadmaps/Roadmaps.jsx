import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Roadmaps = () => {

    const navigation =useNavigation()

    const features = [
        {
            title: "Frontend Development",
            description: "Fix UI/UX for applications.",
            icon: require("../../assets/front.jpg"),
            onPress: () => navigation.navigate("Front"),
        },
        {
            title: "Backend Development",
            description: "Learn server-side logic and databases",
            icon: require("../../assets/backend.jpg"),
            onPress: () => navigation.navigate("Back"),
        },
        {
            title: "Blockchain",
            description: "Experience decentralized secure transactions",
            icon: require("../../assets/blockchain.jpg"),
            onPress: () => navigation.navigate("Block"),
        },
        {
            title: "Machine Learning",
            description: "Develop data-driven predictive models.",
            icon: require("../../assets/ml.jpg"),
            onPress: () => navigation.navigate("Ml"),
        },
        {
            title: "DevOps Engineer",
            description: "Learn about development and deployment.",
            icon: require("../../assets/devops.jpg"),
            onPress: () => navigation.navigate("Devops"),
        },
        {
            title: "Data Science",
            description: "Extract insights from data",
            icon: require("../../assets/datasci.jpg"),
            onPress: () => navigation.navigate("DataSci"),
        },
    ];
    return (
        <ScrollView>
            <View style={styles.container}>
                {features.map((feature, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.featureItem}
                        onPress={feature.onPress}
                    >
                        <Image source={feature.icon} style={styles.featureIcon} />
                        <View style={styles.featureTextContainer}>
                            <Text style={styles.featureTitle}>{feature.title}</Text>
                            <Text style={styles.featureDescription}>{feature.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default Roadmaps

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Use flexGrow instead of flex: 1
        padding: 20,
        backgroundColor: "#f4f4f4",
        marginTop: 70,
    },
    featureItem: {
        flexDirection: "column", // Changed to row for horizontal layout
        alignItems: "center",
        marginBottom: 40,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    featureIcon: {
        width: 230, // Adjusted width for the icon
        height: 80, // Adjusted height for the icon
        marginRight: 20,
        borderRadius: 15,
        resizeMode: "cover", // Use resizeMode instead of objectFit for Image
    },
    featureTextContainer: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
        textAlign:"center"
    },
    featureDescription: {
        fontSize: 16,
        color: "#666",
        textAlign:"center"
    },
});
