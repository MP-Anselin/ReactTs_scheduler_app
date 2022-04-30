import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
interface IDataType {
    date: any,
    days: [],
    task: null}

const initialState: IDataType = {
    date: new Date(),
    days: [],
    task: null}

// Create context
export const GlobalContext = createContext({});

// Provider component
// @ts-ignore
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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

    const saveDate = (date: []) => {
        dispatch({
            type: 'SAVE_DATE',
            payload: date
        });
    }

    return (<GlobalContext.Provider value={{
        tasks: state.tasks,
        deleteTask,
        addTask,
        saveDate,
        saveTask,
    }}>
        {children}
    </GlobalContext.Provider>);
}