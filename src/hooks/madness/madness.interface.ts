export interface MadnessEffects {
  condition: string;
  message: {
    id: string;
    internal: {
      content: string;
    }
  }
}

export interface Madness {
  node: {
    calculation: number;
    duration: 'string';
    id: string;
    name: string;
    effects: MadnessEffects[];
  }
}

export interface AllContentfulMadness {
  allContentfulMadness: {
    edges: Madness[];
  }
}
