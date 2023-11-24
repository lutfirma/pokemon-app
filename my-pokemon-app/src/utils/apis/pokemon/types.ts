export interface Pokemon {
  id: number;
  name: string;
  weight: string;
  height: string;
  ablity: string;
  status: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  types: string;
}
