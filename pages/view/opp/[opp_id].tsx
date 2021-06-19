import React from 'react';
import { useRouter } from 'next/router';
import classes from '../../../styles/ViewOpp.module.css';
import { Layout } from '../../../components/Layout';
import { ThemeSwitcher } from '../../../components/ThemeSwitcher';
import { EmailSubscription } from '../../../components/EmailSubscription';
import { Loader } from '../../../components/Loader';
import { ProfileCard } from '../../../components/ProfileCard';
import { Image } from '../../../components/Image';

import { supabase } from '../../../utils/supabase';
import { definitions } from '../../../types/supabase-types';
import { generateComponentKey } from '../../../utils/generateComponentKey';
// import { throttle } from '../utils/throttle';

// eslint-disable-next-line
export default function ViewOpp() {
  const generateKey = generateComponentKey();
  const router = useRouter();
  const opportunityId = router.query.opp_id;

  const [opportunity, setOpportunity] = React.useState<
  definitions['opportunities']
  >();

  React.useEffect(() => {
    supabase
      .from<definitions['opportunities']>('opportunities')
      .select('*')
      .eq('id', Array.isArray(opportunityId) ? opportunityId[0] : opportunityId)
      .then((resp) => (resp.data ? setOpportunity(resp.data[0]) : undefined));
  }, [opportunityId]);

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

        <div>
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
