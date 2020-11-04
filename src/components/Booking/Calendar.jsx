import React, { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';

const Calendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  return (
    <div className="calendar">
      <p>
        Selected start date:{' '}
        {startDate ? format(startDate, 'dd MMM yyyy', { locale: fr }) : 'none'}.
      </p>
      <p>
        Selected end date:{' '}
        {endDate ? format(endDate, 'dd MMM yyyy', { locale: fr }) : 'none'}.
      </p>
      <p>Currently selecting: {focus}.</p>
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={fr}
      />
    </div>
  );
};

export default Calendar;