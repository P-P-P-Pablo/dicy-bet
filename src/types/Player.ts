export default interface Player {
  id: number;
  name: string;
  type?:
    | "Guerre"
    | "Sagesse"
    | "Liberté"
    | "Souverain"
    | "Mort"
    | "Forge"
    | "Péché"
    | "Marin"
    | "Union"
    | "Sacre"
    | "Chasse"
    | "Art"
    | "Passion"
    | "Nature";
  stats: {
    pv: number;
    strength: number;
    stamina: number;
    magic: number;
    spirit: number;
    speed: number;
  };
  currentDrachmas?: number;
  totalDrachmas?: number; // currentDrachmas+spendDrachmas
  inGame: boolean;
}
