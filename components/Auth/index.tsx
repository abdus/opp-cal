import React from 'react';
import classes from './auth.module.css';
import { supabase } from '../../utils/supabase';

type PropType = {};

export function Auth(props: PropType) {
  return (
    <>
      <div className={classes.container}>
        <button
          type="button"
          style={{ width: '100%' }}
          onClick={async () => {
            // .
            supabase.auth.signIn({ provider: 'google' });
          }}
        >
          Login with Google
        </button>
      </div>
    </>
  );
}
