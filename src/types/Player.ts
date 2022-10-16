export default interface Player {
  id: number;
  name: string;
  type?: string[];
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
  inGame?: boolean;
}
