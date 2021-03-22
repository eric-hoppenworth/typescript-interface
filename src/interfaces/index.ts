export interface IFoodRater {
  getRatingFromStats(foodStats: FoodStats): number;
}

export type FoodStats = {
  portionSize: number; // number 1 to 10
  sweetnessIndex: number; // number 1 to 10
  savoryIndex: number; // number 1 to 10
  spicyIndex: number; // number 1 to 10
  servingTemp: "cold" | "hot";
}

export type Food = {
  title: string;
  stats: FoodStats;
}
