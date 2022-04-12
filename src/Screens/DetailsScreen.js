import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

const DetailScreen = ({ route, navigation}) =>{

    const { itemID, text } = route.params;

    return(
        <View style={styles.main}>
            <Text>Detais Screen</Text>
            <Text> Data passed is: {itemID} and {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        padding: 10
    }
})

export default DetailScreen