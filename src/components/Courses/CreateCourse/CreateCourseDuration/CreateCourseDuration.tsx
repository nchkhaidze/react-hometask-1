import dayjs from 'dayjs';
import React from 'react';

interface CreateCourseDurationProps {
  duration: number;
  setDuration: (value: number) => void;
}

const CreateCourseDuration = ({
  duration,
  setDuration,
}: CreateCourseDurationProps) => {
  const durationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < 1) {
      return;
    }
    setDuration(Number(event.target.value));
  };

  return (
    <div className='parameters__duration'>
      <div className='parameters__add-duration'>
        <div className='parameters__header'>Duration</div>
        <div className='create__label'>
          <label>Duration</label>
        </div>
        <input
          type='number'
          placeholder='Enter duration in minutes...'
          className='input'
          min={1}
          value={duration}
          onChange={durationHandler}
        />
        <div className='parameters__total-duration'>
          Duration: <b>{dayjs.duration(duration, 'minutes').format('H:mm')} </b>
          hours
        </div>
      </div>
    </div>
  );
};

export default CreateCourseDuration;
