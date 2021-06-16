import React from 'react';
import { Layout } from '../components/Layout';
import classes from '../styles/Submit.module.css';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { EmailSubscription } from '../components/EmailSubscription';
import { Loader } from '../components/Loader';
import { ProfileCard } from '../components/ProfileCard';

// eslint-disable-next-line
export default function Submit() {
  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <form className={classes.form}>
          <h3>Add a new Opportunity</h3>

          {/* <img src="https://i.ibb.co/g70HK8V/2021-06-15-11-38-11.png" alt="" /> */}
          <p>
            Saw an opportunity? Help others by listing it here! Let us rise by
            lifting others.
          </p>

          <div className={classes.row}>
            <label htmlFor="last-date">
              <span>
                Last Date
                <span className={classes.color_red}>*</span>
              </span>
              <input type="date" id="last-date" />
            </label>
            <label htmlFor="location">
              <span>
                Location
                <span className={classes.color_red}>*</span>
              </span>
              <input
                type="text"
                id="location"
                placeholder="Mumbai, Maharashtra"
              />
            </label>
          </div>

          <label htmlFor="opportunity-title">
            <span>
              Job Title/Opportunity Name
              <span className={classes.color_red}>*</span>
            </span>
            <input
              id="opportunity-title"
              type="text"
              name=""
              placeholder="SDE-I/Hackathon etc"
            />
          </label>

          <div className={classes.row}>
            <label htmlFor="company">
              <span>
                Company
                <span className={classes.color_red}>*</span>
              </span>
              <input id="company" type="text" name="" placeholder="Google" />
            </label>

            <label htmlFor="eligibility">
              <span>
                Eligibility
                <span className={classes.color_red}>*</span>
              </span>
              <input id="eligibility" type="text" name="" placeholder="BTech" />
            </label>
          </div>

          <label htmlFor="desc">
            <span>Job Description</span>
            <textarea
              style={{ resize: 'vertical' }}
              id="desc"
              rows={7}
              placeholder="A detailed description"
            />
          </label>

          <label htmlFor="logo">
            <span>Logo URL</span>
            <input id="logo" type="file" name="" />
          </label>

          <label htmlFor="apply">
            <span>
              Apply at
              <span className={classes.color_red}>*</span>
            </span>
            <input
              id="apply"
              type="text"
              name=""
              placeholder="https://jobs.lever.com/path/to/job"
            />
          </label>

          <div className={classes.row}>
            {/* eslint-disable-next-line */}
            <button type="reset">RESET</button>
            <button className="gradient" type="submit">
              SUBMIT
            </button>
          </div>
        </form>

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
