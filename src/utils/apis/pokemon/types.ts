export type Response<T = any> = {
  count: number;
  next: string;
  previous: string;
  result: T;
};

export interface Pokemon {
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  base_experience: number;
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  height: number;
  id: number;
  moves: [
    {
      move: {
        name: string;
      };
    }
  ];
  name: string;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
  weight: number;
}
