export interface AddCharacter{
  name: string;
  data: {
    effects:{
      description: string;
      effects: string;
      indefinite: boolean;
    },
    madnessLevel: number;
  }
}

export interface DeleteCharacter{
  userId: string;
  characterName: string;
}
