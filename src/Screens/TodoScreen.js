import React, {useState} from 'react'
import { Text, FlatList ,StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import TodoListItem from '../Components/TodoListItem'

export default function TodoScreen(){

    const[currentText, setCurrentText] = useState()
    const[todos, setTodos] = useState([
        {
            id: 0,
            title: 'Water the plants',
            isDone: false
        },{
            id: 1,
            title: "Read a book",
            isDone: true
        }
    ])

    const handleCheck = (itemId) => {
        todos.find(item => {
            if(itemId === item.id){
                item.isDone = !item.isDone
            }
        })
    }

    const addTodo = () => {
        const todo = {
            id: todos.length + 1,
            title: currentText,
            isDone: false
        }
        setTodos([...todos, todo])
    }

    return(
        <View style={styles.main}>
            <Text style={styles.titleText}> Your todos</Text>
            <View style={styles.todoList}>
                <FlatList
                    style={styles.list}
                    data={todos}
                    renderItem={({ item }) => {
                        return <TodoListItem 
                                title={item.title}
                                id={item.id}
                                alterCheck={(itemId) => handleCheck(itemId)}
                                isDone={item.isDone} />
                    }}
                />
                <View style={styles.inputLayout}>
                    <TextInput
                        placeholder='Enter Todo...'
                        keyboardType='default'
                        onChangeText={(text) => setCurrentText(text)}
                        style={styles.todoAddTF}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={() => addTodo()}>
                        <Icon name='add-outline' size={30} color='#ffffff'/>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        flex: 1,
        margin: 10
    },
    inputLayout:{
        flexDirection: 'row'
    },
    addButton:{
        borderColor:'#4a62f5',
        borderRadius: 10,
        borderWidth: 2,
        flex: 1,
        marginVertical:10,
        backgroundColor: '#4a62f5',
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        textAlign: 'center',
        fontSize: 20,
        color: '#4a62f5',
        fontWeight: '700'
    },
    todoList:{
        flex: 1
    },  
    list:{
        marginVertical: 10,
        flex: 1
    },
    todoAddTF:{
        margin: 10,
        paddingHorizontal: 20,
        color: '#4a62f5',
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#4a62f5',
        flex: 2
    }
})
