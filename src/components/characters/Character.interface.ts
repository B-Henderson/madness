export interface Character{
  name: string;
  effects:{
    description: string;
    effect: string;
    indefinite: boolean;
  }[]
  madnessLevel: number;
}
