import React from 'react';
import { AuthUserType } from './types';
import { supabase } from './utils/supabase';

export const AuthUserContext = React.createContext<AuthUserType | undefined>(
  undefined,
);

export function ContextProvider(props: {
  children: React.ReactNode | React.ReactNodeArray;
}) {
  const [authUser, setAuthUser] = React.useState<AuthUserType>();

  React.useEffect(() => {
    // onAuthStateChange does not trigger unless there's an event
    // so, please don't remove this block
    const user = supabase.auth.user();

    if (user?.id && user.email) {
      setAuthUser({
        fullName: user.user_metadata.full_name,
        id: user.id,
        email: user.email,
        avatarUrl: user.user_metadata.avatar_url,
      });
    } else {
      setAuthUser(undefined);
    }

    // whenever Auth's State changes
    const unsub = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user?.id && session.user.email) {
        setAuthUser({
          fullName: session?.user?.user_metadata.full_name,
          id: session.user.id,
          email: session.user.email,
          avatarUrl: session.user.user_metadata.avatar_url,
        });
      } else {
        setAuthUser(undefined);
      }
    });

    return () => {
      unsub.data?.unsubscribe();
    };
  }, []);

  return (
    <>
      <AuthUserContext.Provider value={authUser}>
        {props.children}
      </AuthUserContext.Provider>
    </>
  );
}
