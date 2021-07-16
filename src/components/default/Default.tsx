import React, {
  useContext, useMemo, useState, useEffect,
} from 'react';
import styled from 'styled-components';

import { FirebaseContext } from 'components/firebase';
import checkIsClient from 'utils/IsClient';
import { Link } from 'gatsby';
import SelectCharacter from 'components/characters/select-character/SelectCharacter';
import AddCharacter from 'components/characters/add-character/AddCharacter';
import { Character } from 'components/characters/Character.interface';
import Paths from 'components/paths/Paths';

const Main = styled.div`
    min-width: 60vw;
    height: 100%;
    display:grid;
    grid-template-areas: 
      'select' 'select' 'select'
      'select' 'select' 'select'
      'add' 'add' 'add';    
`;

const Default = () => {
  const isClient = useMemo(() => checkIsClient(), []);
  const { userId, authToken } = useContext(FirebaseContext);
  const [loggedIn, setLoggedIn] = useState(!!userId || !!authToken);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(null);

  const setCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  useEffect(() => {
    if (!isClient) return;
    setLoggedIn(!!authToken || !!userId);
  }, [authToken, isClient, userId]);

  if (!loggedIn) {
    return (
      <Main>
        <Link to="/app/login">Please login to continue </Link>
      </Main>
    );
  }

  return (
    <Main>
      {!selectedCharacter && (
      <>
        <SelectCharacter setCharacter={setCharacter} />
        <AddCharacter />
      </>
      )}
      {selectedCharacter && (
      <Paths character={selectedCharacter} />
      )}
    </Main>
  );
};

export default Default;
