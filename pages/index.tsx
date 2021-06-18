import React from 'react';
import { Layout } from '../components/Layout';
// import classes from '../styles/Home.module.css';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { EmailSubscription } from '../components/EmailSubscription';
import { OpportunityCard } from '../components/OpportunityCard';
import { Loader } from '../components/Loader';
import { OpportunityFilter } from '../components/OpportunityFilter';
import { ProfileCard } from '../components/ProfileCard';

import { supabase } from '../utils/supabase';
import { throttle } from '../utils/throttle';
import { definitions } from '../types/supabase-types';

// eslint-disable-next-line
export default function Home() {
  const [searchText, setSearchText] = React.useState('');
  const [opportunities, setOpportunities] = React.useState<
  definitions['opportunities'][]
  >();

  const handleFilterChnage = (text: string) => throttle(() => setSearchText(text));

  React.useEffect(() => {
    supabase
      .from<definitions['opportunities']>('opportunities')
      .select('*')
      .ilike('opp_name', `%${searchText}%`)
      .then((resp) => (resp.data ? setOpportunities(resp.data) : undefined));
  }, [searchText]);

  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <h2>Latest Opportunities</h2>

        <OpportunityFilter onChange={handleFilterChnage} />

        {Array.isArray(opportunities)
          && opportunities?.reverse()?.map((opp) => (
            <OpportunityCard
              oppTitle={opp.opp_name}
              logoURL={opp.company_logo_url || '#'}
              location={opp.location}
              description={opp.opp_description || ''}
              eligibility={opp.eligibility || ''}
              organisation={opp.company_name || ''}
              type={opp.type || 'Full-Time'}
              lastDate={new Date(opp.opp_deadline)}
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
