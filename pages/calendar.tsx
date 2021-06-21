import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/Layout';
// import classes from '../styles/Home.module.css';
import { EmailSubscription } from '@/components/EmailSubscription';
// import { Loader } from '../components/Loader';
import { ProfileCard } from '@/components/ProfileCard';
import { Calender } from '@/components/Calendar';
import { supabase } from '@/utils/supabase';
import { definitions } from '@/types/supabase-types';

type PropType = {
  oppMappedToDeadline: {
    [key: string]: definitions['opportunities'][];
  };
};

// eslint-disable-next-line
export default function Calendar(props: PropType) {
  return (
    <>
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <Calender oppDeadlineMap={props.oppMappedToDeadline} />
      </Layout>
    </>
  );
}

function mapOppToDate(opportunities: definitions['opportunities'][]) {
  const finalData: { [key: string]: definitions['opportunities'][] } = {};

  for (let i = 0; i < opportunities.length; i += 1) {
    const opp = opportunities[i];
    const dtString = new Date(opp.opp_deadline).toDateString();

    if (!Array.isArray(finalData[dtString])) {
      finalData[dtString] = [];
    }

    finalData[dtString].push(opp);
  }

  return finalData;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const resp = await supabase
    .from<definitions['opportunities']>('opportunities')
    .select('*')
    .gte('opp_deadline', new Date().toISOString())
    .order('updated_at', { ascending: false });

  return {
    props: {
      oppMappedToDeadline: resp.data && mapOppToDate(resp.data),
    },
  };
};
