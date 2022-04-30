import {sameDay} from "./sameDay";
import {getDatabase} from "../../api/apiData";

export const setDate = (state: any, action: { payload: any; }) => {

    const date = action.payload;
// Calendar Start Day
    const d1 = new Date(date.getFullYear(), date.getMonth()    , 1);
    d1.setDate(d1.getDate() - (d1.getDay() === 0 ? 7 : d1.getDay()));
// Calendart End Day
    const d2 = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    if(d2.getDay() !== 0) d2.setDate(d2.getDate() + (7 - d2.getDay()));

    const db = getDatabase();

    const days = [];
    do { // Obtain tasks
        d1.setDate(d1.getDate() + 1); // iterate
        days.push({
            date: new Date(d1.getTime()),
            tasks: db.filter((task: { date: { getDate: () => any; getMonth: () => any; getFullYear: () => any; }; })=> sameDay(d1, task.date))
        });
    } while(!sameDay(d1, d2));

    return { // Update state
        ...state,
        date: date,
        days: days
    }
}