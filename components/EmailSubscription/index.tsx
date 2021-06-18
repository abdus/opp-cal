import React from 'react';
import classes from './email-subscription.module.css';

// type PropType = {};

export function EmailSubscription() {
  const [error, setError] = React.useState<string>();

  return (
    <>
      <form className={classes.form}>
        <h3 style={{ marginTop: 0 }}>
          Don&apos;t Miss on another Opportunity. Subscribe Now!
        </h3>
        <label htmlFor="email-subscription">
          <input
            id="email-subscription"
            type="email"
            onChange={(ev) => {
              // have to trust SO on this one (https://stackoverflow.com/a/92045680
              const mail = /^[^\s@]+@[^\s@]+$/;
              const text = ev.target.value;

              if (!text) {
                setError(undefined);
                return;
              }

              if (!mail.test(text)) {
                setError('This email address does not looks right.');
              } else {
                setError(undefined);
              }
            }}
            placeholder="Enter your best Email"
          />
          <input
            type="button"
            disabled={!!error}
            className="gradient"
            value="Get Updates"
          />
        </label>

        {error && (
          <div style={{ opacity: error ? 1 : 0 }} className={classes.error_box}>
            <>{error}</>
          </div>
        )}
      </form>
    </>
  );
}
