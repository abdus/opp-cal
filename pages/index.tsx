import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/Layout';
// import classes from '../styles/Home.module.css';
import { EmailSubscription } from '../components/EmailSubscription';
import { OpportunityCard } from '../components/OpportunityCard';
import { Loader } from '../components/Loader';
import { OpportunityFilter } from '../components/OpportunityFilter';
import { ProfileCard } from '../components/ProfileCard';

import { supabase } from '../utils/supabase';
import { throttle } from '../utils/throttle';
import { definitions } from '../types/supabase-types';
import { generateComponentKey } from '../utils/generateComponentKey';

type PropType = {
  opportunities: definitions['opportunities'][];
};

// eslint-disable-next-line
export default function Home(props: PropType) {
  const generateKey = generateComponentKey();
  const [searchText, setSearchText] = React.useState('');
  const [opportunities, setOpportunities] = React.useState(props.opportunities);
  //
  // since the initial version of data is coming from the server, there is no
  // point in fetching it again unless user types something in search box
  const [shouldSearch, setShouldSearch] = React.useState(false);

  const handleFilterChnage = (text: string) => throttle(() => setSearchText(text));

  React.useEffect(() => {
    if (shouldSearch) {
      supabase
        .from<definitions['opportunities']>('opportunities')
        .select('*')
        .gte('opp_deadline', new Date().toISOString())
        .ilike('opp_name', `%${searchText?.trim()}%`)
        .then((resp) => (resp.data ? setOpportunities(resp.data?.reverse()) : undefined));
    }
  }, [searchText, shouldSearch]);

  return (
    <>
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <OpportunityFilter
          onChange={handleFilterChnage}
          onFocus={() => setShouldSearch(true)}
        />

        {Array.isArray(opportunities)
          && opportunities?.map((opp) => (
            <OpportunityCard
              key={generateKey.next().value || ''}
              id={opp.id}
              oppTitle={opp.opp_name}
              logoURL={opp.company_logo_url || '#'}
              location={opp.location}
              description={opp.opp_description || ''}
              eligibility={opp.eligibility || ''}
              organisation={opp.company_name || ''}
              type={opp.type || 'Full-Time'}
              lastDate={new Date(opp.opp_deadline)}
              apply={opp.apply_at}
            />
          ))}

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

export const getServerSideProps: GetServerSideProps = async () => {
  const resp = await supabase
    .from<definitions['opportunities']>('opportunities')
    .select('*')
    .gte('opp_deadline', new Date().toISOString())
    .order('updated_at', { ascending: false });

  return {
    props: {
      opportunities: resp.data,
    },
  };
};
