import { setDate } from './reducer-functions/setDate';
import { addTask } from './reducer-functions/addTask';
import { saveTask } from './reducer-functions/saveTask';
import { deleteTask } from './reducer-functions/deleteTask';

const reducerAction = (
  state: { tasks: any[] },
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case 'DELETE_TASK':
      return deleteTask(state, action);
    case 'ADD_TASK':
      return addTask(state, action);
    case 'SAVE_TASK':
      return saveTask(state, action);
    case 'SET_DATE':
      return setDate(state, action);
    default:
      return state;
  }
};

export default reducerAction;
