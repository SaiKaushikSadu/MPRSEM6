import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Scheduler = () => {

    const [selectedDay, setSelectedDay] = useState("Monday");

    // Sample schedule data for each day
    const scheduleData = [
        {
            day: 'Monday',
            subjects: ['SPCC', 'LAB(CSS)', 'N/A', 'NLP', 'CSS', 'LAB(CCL)'],
            timings: ['09:15 A.M.', '10:15 A.M.', '11:15 A.M.', '01:00 P.M.', '02:00 P.M.', '03:00 P.M.']
        },
        {
            day: 'Tuesday',
            subjects: ['SPCC', 'LAB(SPCC)', 'N/A', 'MCC', 'NLP', 'MPR'],
            timings: ['09:15 A.M.', '10:15 A.M.', '11:15 A.M.', '01:00 P.M.', '02:00 P.M.', '03:00 P.M.']
        },
        {
            day: 'Wednesday',
            subjects: ['MPR', 'MCC', 'AI', 'CSS', 'QA', 'MCC'],
            timings: ['09:15 A.M.', '10:15 A.M.', '11:15 A.M.', '01:00 P.M.', '02:00 P.M.', '03:00 P.M.']
        },
        {
            day: 'Thursday',
            subjects: ['MPR', 'NLP', 'QA', 'MCC', 'MPR', 'N/A'],
            timings: ['09:15 A.M.', '10:15 A.M.', '11:15 A.M.', '01:00 P.M.', '02:00 P.M.', '03:00 P.M.']
        },
        {
            day: 'Friday',
            subjects: ['QA', 'SPCC', 'CSS', 'CCL', 'N/A', 'N/A'],
            timings: ['09:15 A.M.', '10:15 A.M.', '11:15 A.M.', '01:00 P.M.', '02:00 P.M.', '03:00 P.M.']
        }
    ];


    const handleDayPress = (day) => {
        setSelectedDay(day); // Set selected day
    };

    return (
        <>

            {/* <ScrollView>
                <View style={styles.Lcontainer}>
                    <Text style={styles.textLarge}>Time Table Schedule</Text>

                    <View style={styles.WeekContainer}>
                        <View style={styles.DayContainer}>
                            <Text style={styles.textSubj}>MON</Text>
                        </View>
                        <View style={styles.DayContainer}>
                            <Text style={styles.textSubj}>TUE</Text>
                        </View>
                        <View style={styles.DayContainer}>
                            <Text style={styles.textSubj}>WED</Text>
                        </View>
                        <View style={styles.DayContainer}>
                            <Text style={styles.textSubj}>THR</Text>
                        </View>
                        <View style={styles.DayContainer}>
                            <Text style={styles.textSubj}>FRI</Text>
                        </View>
                    </View>

                    <View style={styles.middleSectionTextContainer}>
                        <Text style={styles.textDay}>Monday</Text>
                    </View>
                    <View style={styles.LowerSectionTextContainer}>
                        <Text style={styles.textSubj}>09:15 A.M.</Text>
                        <Text style={styles.textSubj}>SPCC</Text>
                    </View>
                    <View style={styles.LowerSectionTextContainer}>
                        <Text style={styles.textSubj}>10:15 A.M.</Text>
                        <Text style={styles.textSubj}>LAB(CSS)</Text>
                    </View>
                    <View style={styles.LowerSectionTextContainer}>
                        <Text style={styles.textSubj}>11:15 A.M.</Text>
                        <Text style={styles.textSubj}>N/A</Text>
                    </View>
                    <View style={styles.LowerSectionTextContainer}>
                        <Text style={styles.textSubj}>01:00 P.M.</Text>
                        <Text style={styles.textSubj}>NLP</Text>
                    </View>
                    <View style={styles.LowerSectionTextContainer}>
                        <Text style={styles.textSubj}>02:00 P.M.</Text>
                        <Text style={styles.textSubj}>CSS</Text>
                    </View>
                    <View style={styles.LowerSectionTextContainer}>
                        <Text style={styles.textSubj}>03:00 P.M.</Text>
                        <Text style={styles.textSubj}>LAB(CCL)</Text>
                    </View>
                </View>
            </ScrollView> */}

            <ScrollView>
                <View style={styles.Lcontainer}>
                    <Text style={styles.textLarge}>Time Table Schedule</Text>

                    <View style={styles.WeekContainer}>
                        {scheduleData.map((daySchedule, index) => (
                            <TouchableOpacity key={index} onPress={() => handleDayPress(daySchedule.day)} style={styles.DayContainer}>
                                <Text style={[styles.textSubj, selectedDay === daySchedule.day && styles.selectedDayText]}>{daySchedule.day}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {selectedDay && (
                        <View>
                            <View style={styles.middleSectionTextContainer}>
                                <Text style={styles.textDay}>{selectedDay}</Text>
                            </View>
                            {scheduleData.find((daySchedule) => daySchedule.day === selectedDay)?.timings.map((timing, timingIndex) => (
                                <View key={timingIndex} style={styles.LowerSectionTextContainer}>
                                    <Text style={styles.textSubj}>{timing}</Text>
                                    <Text style={styles.textSubj}>{scheduleData.find((daySchedule) => daySchedule.day === selectedDay)?.subjects[timingIndex]}</Text>
                                </View>
                            ))}

                        </View>
                    )}
                </View>
            </ScrollView>

        </>
    )
}

export default Scheduler

const styles = StyleSheet.create({
    Lcontainer: {
        flex: 1,
        alignContent: "center",
        padding: 20,
        paddingTop: 80,
    },
    WeekContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    DayContainer: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "rgb(110, 142, 251)"
    },
    textDay: {
        fontSize: 16,
        fontWeight: "600",
        color: "white"
    },
    textSubj: {
        fontSize: 16,
        fontWeight: "600",
        color: "black"
    },
    textLarge: {
        fontSize: 32,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 20,
    },
    middleSectionTextContainer: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: 40,
        backgroundColor: "rgb(110, 142, 251)",
        borderRadius: 10,
        padding: 30
    },
    LowerSectionTextContainer: {
        flexDirection: "row",
        gap: 160,
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#6e8efb", // Use hexadecimal notation
        borderRadius: 10,
        padding: 20
    },
    selectedDayText: {
        backgroundColor: 'rgba(110, 142, 251, 0.8)', // Example of styling for selected day
    },
});