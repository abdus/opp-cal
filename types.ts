import firebase from 'firebase/app'

export type UserType = {
  id: string;
  avatarUrl: string|null;
  displayName: string|null;
};

export type PhraseType = {
  title: string;
  isPublic: boolean;
  phonetics: string;
  description: string;
  owner: firebase.firestore.DocumentReference|UserType;
};
