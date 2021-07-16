import { Character } from 'components/characters/Character.interface';

export interface Props {
  character: Character;
}

export interface Effects{
  condition: string;
  message: {
    id: string;
    internal:{
      content: string;
    }
  }
}
