import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import {contrast} from '../utils/utils';
import Task from './Task';
import {sameDay} from "../context/reducer-functions/sameDay";

interface Props {
    day: any;
    date: any;
    setDate: React.Dispatch<React.SetStateAction<any>>;
}

const Day: React.FC<Props> = ({day, date}) => {

    const {setTask, setDate} = useContext(GlobalContext);

    const getStyle = (color: string) => {
        return {background: color, color: contrast(color)};
    }
    const selected = sameDay(day.date, date);
    const style = (day.date.getMonth() !== date.getMonth() ? ' disabled' : '')
        + (sameDay(day.date, new Date()) ? ' current-day' : '')
        + (selected ? ' selected-day' : '')
    return (
        <div className={`day ${style}`} onClick={() => setDate(day.date)}>
            <div className="task-day">
                <div className="tasks">
                    {day.tasks.map((task: { id: React.Key | null | undefined; color: string; }) => (
                        <Task key={task.id} task={task} style={getStyle(task.color)}/>
                    ))}

                </div>
                <h3> {day.date.getDate()} </h3>
            </div>
            {selected ? <div className="button button-blue add-button" onClick={() => setTask({})}>+</div> : null}
        </div>
    )
}

export default Day;