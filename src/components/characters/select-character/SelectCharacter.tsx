import React, {
  useEffect, useContext, useState, useMemo,
} from 'react';

import { FirebaseContext } from 'components/firebase';
import checkIsClient from 'utils/IsClient';
import { Container } from './SelectStyled';
import { Character } from '../Character.interface';
import { Props } from './SelectCharacter.interface';

const SelectCharacter = ({ setCharacter }: Props): JSX.Element => {
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
              <h3 onClick={() => setCharacter(character)}>
                {character.name}
              </h3>
              {character
                .effects
                .map((effect) => <div key={effect.condition}>{effect.condition}</div>)}
            </div>
          ))
      }
    </Container>
  );
};

export default SelectCharacter;
