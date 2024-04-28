import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import backroad from "../../assets/backendroad.png"

const Back = () => {
  return (
    <>
    
        <View>
            <Image style={styles.roadimg} source={backroad}></Image>
        </View>

    </>
  )
}

export default Back


const styles = StyleSheet.create({
    roadimg:{
        marginTop:50,
        height:850,
        width:450
    }
})