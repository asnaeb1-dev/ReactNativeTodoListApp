import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native'

const AboutScreen = () =>{
    return(
        <View style={styles.main}>
            <Text>Home Screen</Text>
            <Button title='Press' />
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        padding: 10
    }
})

export default AboutScreen