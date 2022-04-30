import {getDatabase, setDatabase} from "../../api/apiData";

export const deleteTask = (state: any, action: { payload: any; }) => {
    let db = getDatabase();
    db = db.filter((task: { id: any; })=> {
        return task.id !== action.payload;
    });
    setDatabase(db);
    return {
        ...state,
    }
}