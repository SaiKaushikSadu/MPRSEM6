import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import React, { useState } from "react";


const Registration4 = () => {
    return (
        <>

            <ScrollView>
                <View style={styles.Lcontainer}>
                    <Text style={styles.textLarge}>Links</Text>
                    <View>
                        <Text style={styles.textSmall}>GitHub Link</Text>
                        <TextInput
                            placeholder="Enter your Github Link"
                            // value={fname}
                            // onChangeText={(text) => setFname(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <Text style={styles.textSmall}>LinkedIn Link</Text>
                        <TextInput
                            placeholder="Enter your LinkedIn Link"
                            // value={lname}
                            // onChangeText={(text) => setLname(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <Text style={styles.textSmall}>Codechef Link</Text>
                        <TextInput
                            placeholder="Enter your CodeChef Link"
                            // value={email}
                            // onChangeText={(text) => setEmail(text)}
                            style={styles.textInput}
                            keyboardType="email-address"
                        />
                    </View>
                    <View>
                        <Text style={styles.textSmall}>CodeForces Link</Text>
                        <TextInput
                            placeholder="Enter your Codeforces Link"
                            // value={phone}
                            // onChangeText={(text) => setPhone(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <Text style={styles.textSmall}>Leetcode Link</Text>
                        <TextInput
                            placeholder="Enter your Leetcode Link"
                            // value={phone}
                            // onChangeText={(text) => setPhone(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <Text style={styles.textSmall}>Discord Link</Text>
                        <TextInput
                            placeholder="Enter your Discord Link"
                            // value={phone}
                            // onChangeText={(text) => setPhone(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>

                        <TouchableOpacity
                            style={styles.btn}
                        // onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.btnText}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                        // onPress={next}
                        >
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

export default Registration4

const styles = StyleSheet.create({
    Lcontainer: {
        flex: 1,
        alignContent: "center",
        padding: 20,
        paddingTop: 80,
    },
    textSmall: {
        fontSize: 16,
        fontWeight: "600",
    },
    textLarge: {
        fontSize: 32,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        padding: 20,
    },
    progreeBar: {
        marginTop: 20,
        padding: 20,
    },
    titleCont: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 0.5,
        borderColor: "#d3d3d3",
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 18,
        marginTop: 20,
        width: 375,
        borderRadius: 10,
        shadowOffset: { width: -3, height: 4 },
        shadowColor: "#171717",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: "rgb(110, 142, 251)",
        paddingHorizontal: 70,
        paddingVertical: 12,
        borderRadius: 5,
        marginRight: 10,
    },
    btnN: {
        backgroundColor: "rgb(110, 142, 251)",
        paddingHorizontal: 70,
        paddingVertical: 12,
        borderRadius: 5,
        marginRight: 10,
        marginTop: 40,
    },
    btnText: {
        fontWeight: "600",
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    radioGroup: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    radioText: {
        marginLeft: 8,
    },
    radioDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "rgb(110, 142, 251)",
        marginLeft: 8,
    },
});