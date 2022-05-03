import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { WeekDays } from '../enums/week-days.enum';
import Day from './Day';

const Calendar: React.FC = () => {
  const { date, days, setDate } = useContext(GlobalContext);

  useEffect(() => {
    setDate(new Date());
    // eslint-disable-next-line
  }, []);

  const returnHtmlWeekDays = () => {
    return WeekDays.map((dayName: string, index) =>
      index > 6 ? <h5 key={dayName}>{dayName}</h5> : null,
    );
  };

  const returnHtmlDays = () => {
    return days.map((day: { date: React.Key | null | undefined }) => (
      <Day key={day.date} day={day} date={date} setDate={setDate} />
    ));
  };

  if (days.length < 1) return null;

  return (
    <div>
      <div className="calendar borderless day-names">
        {returnHtmlWeekDays()}
      </div>
      <div className="calendar">{returnHtmlDays()}</div>
    </div>
  );
};

export default Calendar;
