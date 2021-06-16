import React from 'react';
import classes from './calender.module.css';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

type PropType = {};

export function Calender(props: PropType) {
  const SEC = 1;
  const MIN_IN_SEC = 60 * SEC;
  const HOUR_IN_SEC = 60 * MIN_IN_SEC;
  const DAY_IN_SEC = 24 * HOUR_IN_SEC;
  const DAY_IN_MILI = DAY_IN_SEC * 1000;
  const THREE_MONTHS = 3 * 30 * DAY_IN_MILI;

  let today = Date.now() - THREE_MONTHS;

  return (
    <div className={classes.container}>
      {Array(500)
        .fill('*')
        .map(() => {
          today += DAY_IN_MILI;
          const dt = new Date(today);
          return (
            <div
              className={classes.cell}
              key={today}
              id={`${dt.getDate()}${dt.getMonth()}${dt.getFullYear()}`}
            >
              <span className={classes.date}>{dt.getDate()}</span>
              <small>
                {months[dt.getMonth() + 1]}
                {', '}
                {dt.getFullYear()}
              </small>
              {Math.random() < 0.3 && <span className={classes.dot} />}
            </div>
          );
        })}
    </div>
  );
}
