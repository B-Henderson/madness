import { Madness } from 'hooks/madness/madness.interface';

export interface Props {
  madness: Madness[];
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
