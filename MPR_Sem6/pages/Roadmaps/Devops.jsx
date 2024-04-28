import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import devops from "../../assets/devopsroad.webp"

const Front = () => {
  return (
    <>
    
        <View>
            <Image style={styles.roadimg} source={devops}></Image>
        </View>

    </>
  )
}

export default Front


const styles = StyleSheet.create({
    roadimg:{
        marginTop:"50%",
        height:500,
        width:440
    }
})