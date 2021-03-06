import React from 'react';
import { Auth } from '../Auth';
import classes from './profile-card.module.css';
import { supabase } from '../../utils/supabase';
import { AuthUserContext } from '../../context';

type PropType = {};

export function ProfileCard(props: PropType) {
  const authUser = React.useContext(AuthUserContext);

  return (
    <>
      {authUser && (
        <>
          <div className={classes.container}>
            <img src={authUser.avatarUrl} alt={authUser.fullName} />

            <h3>{authUser.fullName}</h3>
            <small>Software Engineer</small>

            <div className={classes.action_btn}>
              <button type="button" onClick={() => alert('Work in Progress')}>
                Profile
              </button>
              <button
                type="button"
                onClick={() => supabase.auth.signOut()}
                style={{ background: 'darkred', color: '#fff' }}
              >
                Sign Out
              </button>
            </div>
          </div>

          <div className={classes.container}>STATS</div>
        </>
      )}

      {!authUser && <Auth />}
    </>
  );
}
