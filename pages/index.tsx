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
import { definitions } from '../types/supabase-types';

// const data = [
// {
// opportunityTitle: 'Software Development Engineer I',
// organisationLogoURL:
// 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
// opportunityLocation: 'New Delhi, Delhi',
// opportunityDescription: 'This is a long job description.',
// opportunityEligibility: 'Bachelor of Technology',
// opportunityOrganisation: 'Google',
// opportunityType: 'Full-Time',
// opportunityRegistrationDeadline: new Date(),
// },
// {
// opportunityTitle: 'Machine Learning Engineer',
// organisationLogoURL:
// 'http://temperfield.com/wp-content/uploads/2017/09/Microsoft-Logo-icon-png-Transparent-Background.png',
// opportunityLocation: 'Pune, Maharashtra',
// opportunityDescription: 'This is a long job description.',
// opportunityEligibility: 'Bachelor of Technology',
// opportunityOrganisation: 'Microsoft',
// opportunityType: 'Full-Time',
// opportunityRegistrationDeadline: new Date(),
// },
// {
// opportunityTitle: 'BackEnd Developer',
// organisationLogoURL:
// 'https://cdn.freebiesupply.com/logos/large/2x/zs-associates-logo-png-transparent.png',
// opportunityLocation: 'Kerala',
// opportunityDescription: 'This is a long job description.',
// opportunityEligibility: 'NA',
// opportunityOrganisation: 'ZS Associates',
// opportunityType: 'Full-time',
// opportunityRegistrationDeadline: new Date(),
// },
// {
// opportunityTitle: 'Summer Analyst Intern',
// organisationLogoURL:
// 'https://pbs.twimg.com/profile_images/2298590576/shbzpzddfgdujjrthh0i.jpeg',
// opportunityLocation: 'Noida, Delhi',
// opportunityDescription: 'This is a long job description.',
// opportunityEligibility: '2022 Grad',
// opportunityOrganisation: 'Directi',
// opportunityType: 'Internship',
// opportunityRegistrationDeadline: new Date(),
// },
// ];

// eslint-disable-next-line
export default function Home() {
  const [opportunities, setOpportunities] = React.useState<
  definitions['opportunities'][]
  >();

  supabase
    .from<definitions['opportunities']>('opportunities')
    .select('*')
    .then((resp) => (resp.data ? setOpportunities(resp.data) : undefined));

  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <h2>Latest Opportunities</h2>
        <OpportunityFilter />

        {Array.isArray(opportunities)
          && opportunities?.map((opp) => (
            <OpportunityCard
              oppTitle={opp.opp_name}
              logoURL={opp.company_logo_url || 'https://google.com'}
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
