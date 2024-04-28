import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import frontroad from "../../assets/frontroad.png"

const Front = () => {
  return (
    <>
    
        <View>
            <Image style={styles.roadimg} source={frontroad}></Image>
        </View>

    </>
  )
}

export default Front


const styles = StyleSheet.create({
    roadimg:{
        marginTop:120,
        height:700,
        width:450
    }
})