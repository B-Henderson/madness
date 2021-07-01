export interface Potions{
  node:{
    name: string;
    description: string;
    id: string;
  }
}

export interface AllContentfulPotions{
  allContentfulPotions:{
    edges: Potions[];
  }
}
