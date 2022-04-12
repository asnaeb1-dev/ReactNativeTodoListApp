import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const TodoListItem = ({ title, id, isDone, alterCheck }) => {
    return(
        <View style={styles.main}>
            <TouchableOpacity style={styles.toucher} onPress={() => alterCheck(id)}>
                <Text style={styles.titleText}>{title}</Text>
                {
                    isDone?
                    <Icon name="checkmark-circle" color={'#00ff00'} size={25}/>:
                    <Icon name="checkmark-circle"  size={25}/>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        borderColor: '#BEBEBE',
        borderWidth: 2,
        borderRadius: 10,
        height:45,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5
    },
    titleText:{
        color: '#4a62f5',
        fontSize: 16,
        fontWeight: '500',
        flex: 1
    },
    toucher:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 10,
    },

})

export default TodoListItem;