import { IFoodRater, FoodStats } from '../interfaces';
import { injectable } from 'inversify';

@injectable()
export class BadRatingAlgorithm implements IFoodRater {
  public getRatingFromStats(stats: FoodStats): number {
    return stats.spicyIndex > 5 ? 10 : 1;
  }
}
