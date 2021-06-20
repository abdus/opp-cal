import React from 'react';
import Link from 'next/link';
import { definitions } from '@/types/supabase-types';
import { generateComponentKey } from '@/utils/generateComponentKey';
import classes from './calendar.module.css';
import { Modal } from './Modal';

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

type PropType = {
  oppDeadlineMap: {
    [key: string]: definitions['opportunities'][];
  };
};

export function Calender(props: PropType) {
  const SEC = 1;
  const MIN_IN_SEC = 60 * SEC;
  const HOUR_IN_SEC = 60 * MIN_IN_SEC;
  const DAY_IN_SEC = 24 * HOUR_IN_SEC;
  const DAY_IN_MILI = DAY_IN_SEC * 1000;
  // const THREE_MONTHS = 3 * 30 * DAY_IN_MILI;

  const generateKey = generateComponentKey();
  const [selectedOpps, setSelectedOpps] = React.useState<
  definitions['opportunities'][]
  >();

  let today = Date.now() - DAY_IN_MILI;

  return (
    <>
      <Modal
        title="Opportunities"
        isOpen={!!selectedOpps}
        onClose={() => setSelectedOpps(undefined)}
      >
        {selectedOpps?.map((opp) => (
          <Link href={`/view/opp/${opp.id}`} key={opp.id}>
            <div className={classes.selected_opportunity_listing}>
              <h3>{opp.opp_name}</h3>
              <strong>{opp.company_name}</strong>
            </div>
          </Link>
        ))}
      </Modal>

      <div className={classes.container}>
        {Array(500)
          .fill('*')
          .map(() => {
            today += DAY_IN_MILI;
            const dt = new Date(today);
            const hasOpp = !!props.oppDeadlineMap[dt.toDateString()];

            return (
              <div
                className={`${classes.cell} ${
                  hasOpp ? classes.cell_have_opp : ''
                }
                  `}
                key={today}
                id={dt.toDateString()}
              >
                <span className={classes.date}>{dt.getDate()}</span>
                <small>
                  {months[dt.getMonth()]}
                  {', '}
                  {dt.getFullYear()}
                </small>
                {hasOpp && (
                  <button
                    type="button"
                    title="Available"
                    className={classes.opp_available_wrapper}
                    onClick={() => setSelectedOpps(props.oppDeadlineMap[dt.toDateString()])}
                  >
                    {props.oppDeadlineMap[dt.toDateString()]?.map(() => (
                      <span
                        className={classes.opp_available_indicator}
                        key={generateKey.next().value || ''}
                      />
                    ))}
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}
