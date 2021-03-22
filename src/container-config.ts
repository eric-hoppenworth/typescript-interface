import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { IFoodRater } from './interfaces'

// this should be the only file with imports of classes
import { BadRatingAlgorithm } from './controllers/foodRater'

export const container = new Container()

// we should be able to change this binding without breakign the application
container.bind<IFoodRater>(TYPES.IFoodRater).to(BadRatingAlgorithm)
