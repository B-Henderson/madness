import firebase from 'firebase';

import { AddCharacter, DeleteCharacter } from './UserData.interface';

const db = firebase.firestore();

const deleteCharacter = async ({ userId, characterName }: DeleteCharacter) => {

};

const getCharacters = async (userId: string) => {
  const playerRef = await db.collection('players').doc(userId).collection('characters').get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));

  return playerRef;
};

const addCharacter = async (userId: string, { name, data }: AddCharacter) => {
  const batch = db.batch();
  const userRef = db.collection('players').doc(userId).collection('characters').doc(name);

  batch.set(userRef, { ...data });

  batch.commit();
};

export default { getCharacters, addCharacter, deleteCharacter };
