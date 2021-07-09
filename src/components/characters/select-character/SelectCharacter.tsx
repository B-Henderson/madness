import React, {
  useEffect, useContext, useState, useMemo,
} from 'react';

import { FirebaseContext } from 'components/firebase';
import checkIsClient from 'utils/IsClient';
import { Container } from './SelectStyled';
import { Character } from '../Character.interface';

const SelectCharacter = (): JSX.Element => {
  const [characters, setCharacters] = useState<any[] | null>(null);
  const isClient = useMemo(() => checkIsClient(), []);
  const { firebase, userId } = useContext(FirebaseContext);

  useEffect(() => {
    if (!firebase || !isClient) return;
    const data = async () => {
      const documents = await firebase.firestore().collection('players').doc(userId).collection('characters')
        .get();
      setCharacters(documents.docs.map((doc) => doc.data()));
    };
    data();
  }, [userId, firebase]);
  return (
    <Container>
      {
        characters && characters
          .map((character: Character) => (
            <div key={character.name}>
              <h3>{character.name}</h3>
              {character.effects.map((effect) => <div key={effect.effect}>{effect.effect}</div>)}
            </div>
          ))
      }
    </Container>
  );
};

export default SelectCharacter;
