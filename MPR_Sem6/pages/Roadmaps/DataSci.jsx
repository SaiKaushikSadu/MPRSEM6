import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import datasciroad from "../../assets/datasciroad.jpeg"

const Front = () => {
  return (
    <>
    
        <View>
            <Image style={styles.roadimg} source={datasciroad}></Image>
        </View>

    </>
  )
}

export default Front


const styles = StyleSheet.create({
    roadimg:{
        marginTop:"50%",
        marginLeft:"auto",
        marginRight:"auto",
        height:500,
        width:400
    }
})