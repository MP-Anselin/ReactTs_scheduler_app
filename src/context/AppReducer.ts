import {saveDate} from "./reducer-functions/saveDate";
import {addTask} from "./reducer-functions/addTask";
import {saveTask} from "./reducer-functions/saveTask";
import {deleteTask} from "./reducer-functions/deleteTask";

export default (state: { tasks: any[]; }, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return deleteTask(state, action)
        case 'ADD_TASK':
            return addTask(state, action);
        case 'SAVE_TASK':
            return saveTask(state, action);
        case 'SAVE_DATE':
            return saveDate(state, action);
        default:
            return state;
    }
}