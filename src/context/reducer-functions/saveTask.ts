import {getDatabase, setDatabase} from "../../api/apiData";
import { v4 as uuidv4 } from 'uuid';


export const saveTask = (state: any, action: { payload: any; }) => {
    let db = getDatabase();
    const task = action.payload;
    if(!task.id) {
        task.id = uuidv4();
        db.push(task);
    } else {
        db = db.map((t: { id: any; }) => {
            return t.id === task.id ? task : t;
        })
    }
    setDatabase(db);
    return {
        ...state
    }
}