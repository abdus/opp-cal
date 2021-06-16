import React from 'react';
import { Layout } from '../components/Layout';
// import classes from '../styles/Home.module.css';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { EmailSubscription } from '../components/EmailSubscription';
import { OpportunityCard } from '../components/OpportunityCard';
import { Loader } from '../components/Loader';
import { OpportunityFilter } from '../components/OpportunityFilter';
import { ProfileCard } from '../components/ProfileCard';

const data = [
  {
    opportunityTitle: 'Software Development Engineer I',
    organisationLogoURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
    opportunityLocation: 'New Delhi, Delhi',
    opportunityDescription: 'This is a long job description.',
    opportunityEligibility: 'Bachelor of Technology',
    opportunityOrganisation: 'Google',
    opportunityType: 'Full-Time',
    opportunityRegistrationDeadline: new Date(),
  },
  {
    opportunityTitle: 'Machine Learning Engineer',
    organisationLogoURL:
      'http://temperfield.com/wp-content/uploads/2017/09/Microsoft-Logo-icon-png-Transparent-Background.png',
    opportunityLocation: 'Pune, Maharashtra',
    opportunityDescription: 'This is a long job description.',
    opportunityEligibility: 'Bachelor of Technology',
    opportunityOrganisation: 'Microsoft',
    opportunityType: 'Full-Time',
    opportunityRegistrationDeadline: new Date(),
  },
  {
    opportunityTitle: 'BackEnd Developer',
    organisationLogoURL:
      'https://cdn.freebiesupply.com/logos/large/2x/zs-associates-logo-png-transparent.png',
    opportunityLocation: 'Kerala',
    opportunityDescription: 'This is a long job description.',
    opportunityEligibility: 'NA',
    opportunityOrganisation: 'ZS Associates',
    opportunityType: 'Full-time',
    opportunityRegistrationDeadline: new Date(),
  },
  {
    opportunityTitle: 'Summer Analyst Intern',
    organisationLogoURL:
      'https://pbs.twimg.com/profile_images/2298590576/shbzpzddfgdujjrthh0i.jpeg',
    opportunityLocation: 'Noida, Delhi',
    opportunityDescription: 'This is a long job description.',
    opportunityEligibility: '2022 Grad',
    opportunityOrganisation: 'Directi',
    opportunityType: 'Internship',
    opportunityRegistrationDeadline: new Date(),
  },
];

// eslint-disable-next-line
export default function Home() {
  // const [opportunities, setOpportunities] = React.useState([]);

  // React.useEffect(() => {
  // fetch(
  // 'https://opportunity-calendar.herokuapp.com/opportunity?page=1&limit=100',
  // )
  // .then((d) => d.json())
  // .then((resp) => {
  // setOpportunities(resp.data.results);
  // });
  // }, []);

  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <h2>Latest Opportunities</h2>
        <OpportunityFilter />

        {Array.isArray(data)
          && data?.map((opp: any) => (
            <OpportunityCard
              oppTitle={opp.opportunityTitle}
              logoURL={opp.organisationLogoURL}
              location={opp.opportunityLocation}
              description={opp.opportunityDescription}
              eligibility={opp.opportunityEligibility}
              organisation={opp.opportunityOrganisation}
              type={opp.opportunityType}
              lastDate={new Date(opp.opportunityRegistrationDeadline)}
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
