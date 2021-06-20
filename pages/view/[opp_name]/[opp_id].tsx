import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/Layout';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { EmailSubscription } from '@/components/EmailSubscription';
import { Loader } from '@/components/Loader';
import { ProfileCard } from '@/components/ProfileCard';
import { Image } from '@/components/Image';

import { definitions } from '@/types/supabase-types';
import { supabase } from '@/utils/supabase';
import { generateComponentKey } from '@/utils/generateComponentKey';

import classes from '@/pageStyles/ViewOpp.module.css';

import { LoadSvg } from '@/components/LoadSvg';
import graduationCapIcon from '../../../icons/graduation-cap.svg';
import calendarIcon from '../../../icons/calendar.svg';
import locationIcon from '../../../icons/location.svg';
import crosshairIcon from '../../../icons/crosshair.svg';

type PropType = {
  opportunity: definitions['opportunities'][];
};

// eslint-disable-next-line
export default function ViewOpp(props: PropType) {
  const generateKey = generateComponentKey();

  const [opportunity] = React.useState(
    props.opportunity?.length > 0 ? props.opportunity[0] : undefined,
  );

  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <header className={classes.header}>
          <div className={classes.image}>
            <Image src={opportunity?.company_logo_url || '#'} />
          </div>
          <div className={classes.title_and_company}>
            <h2>{opportunity?.opp_name}</h2>
            <span>{opportunity?.company_name}</span>
          </div>
        </header>

        <div className={classes.meta}>
          {opportunity?.eligibility && (
            <div className={classes.meta_item}>
              <LoadSvg
                className={classes.icon}
                svg={graduationCapIcon}
                strokeColor="var(--foreground)"
                strokeWidth={1}
              />
              <small className={classes.text}>{opportunity?.eligibility}</small>
            </div>
          )}

          {opportunity?.opp_deadline && (
            <div className={classes.meta_item}>
              <LoadSvg
                className={classes.icon}
                svg={calendarIcon}
                strokeColor="var(--foreground)"
                strokeWidth={1}
              />
              <small className={classes.text}>
                {new Date(opportunity?.opp_deadline).toLocaleDateString()}
              </small>
            </div>
          )}

          {opportunity?.location && (
            <div className={classes.meta_item}>
              <LoadSvg
                className={classes.icon}
                svg={locationIcon}
                fillColor="var(--foreground)"
                strokeWidth={1}
              />
              <small className={classes.text}>{opportunity.location}</small>
            </div>
          )}

          {opportunity?.type && (
            <div className={classes.meta_item}>
              <LoadSvg
                className={classes.icon}
                svg={crosshairIcon}
                fillColor="var(--foreground)"
                strokeWidth={1}
                opacity={0.6}
              />
              <small className={classes.text}>{opportunity?.type}</small>
            </div>
          )}
        </div>

        <div className={classes.description}>
          {opportunity?.opp_description?.split('\\n').map((sentance) => (
            <React.Fragment key={generateKey.next().value || ''}>
              {sentance}
              <br />
            </React.Fragment>
          ))}
        </div>

        <div
          style={{
            margin: '5rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const oppId = context.query.opp_id;

  const resp = await supabase
    .from<definitions['opportunities']>('opportunities')
    .select('*')
    .eq('id', Array.isArray(oppId) ? oppId[0] : oppId);

  return {
    props: {
      opportunity: resp.data,
    },
  };
};
