import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useState } from 'react/cjs/react.production.min'

const HomeScreen = ({ navigation }) =>{

    return(
        <View style={styles.main}>
            <Text style={styles.box1}>box 1</Text>
            <Text style={styles.box2}>box 1</Text>
            <Text style={styles.box3}>box 1</Text>
            <Text style={styles.box4}>box 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        // backgroundColor: 'red',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1
    },
    box1:{
        backgroundColor: 'green',
        flex: 1
    },
    box2:{
        backgroundColor: 'black',
        padding: 20,
        flex: 1
    },
    box3:{
        backgroundColor: 'gold',
        padding: 30,
        flex: 1

    },
    box4:{
        backgroundColor: 'blue',
        padding: 40,
        flex: 1

    }
})

export default HomeScreen