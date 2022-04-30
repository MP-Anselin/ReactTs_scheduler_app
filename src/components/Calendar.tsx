import React, {useContext, useEffect} from "react";
import {GlobalContext} from '../context/GlobalState'
import Day from "./Day";

const Calendar: React.FC = () => {
    const {date, days, setDate} = useContext(GlobalContext);

    useEffect(() => {
        setDate(new Date());
        // eslint-disable-next-line
    }, []);

    if (days.length < 1) return null;

    const names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div>
            <div className="calendar borderless day-names">
                {names.map(name =>
                    <h5 key={name}>{name}</h5>
                )}
            </div>
            <div className="calendar">
                {days.map((day: { date: React.Key | null | undefined; }) =>
                    <Day key={day.date} day={day} date={date} setDate={setDate}/>)
                }
            </div>
        </div>
    );
}

export default Calendar;