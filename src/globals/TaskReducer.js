import React from "react";

// the starting state of the todo tasks (an empty array)
export const initialState = []

// a variable to store the id of the task, 
let newID = 1


//Managing the state of the tasks using the reducer function
const tasksReducer = (tasks, action) => {
    switch(action.type) {
        //add tasks will return all the tasks + adding the newly created task, id will increment itself, -
        //  adding the text and setting its completed status "false" by default
        case 'add_task':
            return [
                ...tasks,
                {
                    id: newID++,
                    text: action.text,
                    completed: false
                }
            ]
        case 'delete_task':
            // we check if the id matches action id, if it does it gets deleted
            return tasks.filter(task => task.id !== action.id)
        case 'toggle_task':
            // maps through all tasks and checks if the specific task id matches with action.id, if true it returns the task as 'completed'
            return tasks.map(task => task.id === action.id ? {...task, completed: !task.completed} : task)
        default: {
            throw Error('error' + action.type) // or return tasks
        }
    }
}

export default tasksReducer