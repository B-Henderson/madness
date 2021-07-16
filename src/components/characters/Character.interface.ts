import { MadnessEffects } from 'hooks/madness/madness.interface';

export interface Character{
  name: string;
  effects:MadnessEffects[]
  madnessLevel: number;
}
