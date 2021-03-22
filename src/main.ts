import { container } from './container-config'
import { TYPES } from './types'
import { foods } from './data/foods'
import { IFoodRater } from './interfaces'


const foodRater = container.get<IFoodRater>(TYPES.IFoodRater)

console.log(foodRater.getRatingFromStats(foods[0].stats));
console.log(foodRater.getRatingFromStats(foods[1].stats));
