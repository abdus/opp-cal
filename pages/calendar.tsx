import React from 'react';
import { Layout } from '../components/Layout';
// import classes from '../styles/Home.module.css';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { EmailSubscription } from '../components/EmailSubscription';
// import { Loader } from '../components/Loader';
import { ProfileCard } from '../components/ProfileCard';
import { Calender } from '../components/Calender';


// eslint-disable-next-line
export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <Calender />
      </Layout>
    </>
  );
}
