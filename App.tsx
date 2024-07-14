
import { useReducer, useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
import tasksReducer from './src/globals/TaskReducer';
import { initialState } from './src/globals/TaskReducer';

const  App = () =>  {
  const [todos, dispatch] = useReducer(tasksReducer, initialState)


  let inputValue = ''

  // Function to handle adding a task
  const addTask = () => {
    if (inputValue) {
      dispatch ({type: 'add_task', text: inputValue})
    }
  }

  // Function to handle deleting a task
  const deleteTask = (id) => {
    dispatch({type: 'delete_task', id})
  }

  // Function to handle task status
  const toggleTask = (id) => {
    dispatch({type: 'toggle_task', id})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        onChangeText={(text) => inputValue = text}
        />
      <Button title="Add Todo" onPress={addTask}/>
      <Text>{}</Text>

      <View>
        
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          
          <View>
            
            <Text style={styles.title}>{item.text}</Text>
            <Text>{}</Text>

            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <Text style={styles.complete}>{item.completed ? 'Re-Open' : 'Complete'}</Text>
            </TouchableOpacity>
            <Text>{}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
            <Text>{}</Text>

          </View>
        )}
        keyExtractor={(item) => (item.id ? item?.id.toString() : 'fallback-key')}></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'cyan',
    borderWidth: 1,
    marginBottom: 10,
  },
  delete: {
    color: 'red'
  },
  complete: {
    color: 'green'
  }
});



export default App;
