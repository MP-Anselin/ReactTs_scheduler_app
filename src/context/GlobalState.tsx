import React, {createContext, useReducer} from 'react';
import reducerAction from "./AppReducer";

const initialState: any = {
    date: new Date(),
    days: [],
    task: null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
// @ts-ignore
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducerAction, initialState);

    // Actions
    const deleteTask = (id: string) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }

    const addTask = (task: []) => {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }

    const saveTask = (task: []) => {
        dispatch({
            type: 'SAVE_TASK',
            payload: task
        });
    }

    const setDate = (date: []) => {
        dispatch({
            type: 'SET_DATE',
            payload: date
        });
    }

    return (<GlobalContext.Provider value={{
        date: state.date,
        days: state.days,
        task: state.task,

        deleteTask,
        addTask,
        setDate,
        saveTask,
    }}>
        {children}
    </GlobalContext.Provider>);
}