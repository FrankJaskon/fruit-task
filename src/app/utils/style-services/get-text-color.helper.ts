import { checkFruit } from '../campaign-services'
import { fruitBackgroundColorMapper, whiteTextColorMapper } from '../mappers'
import { globalColors } from '../../global/theme'

export const getTextColor = (fruit: string) => {
  if (!checkFruit(fruit)) return globalColors.red

  const fruitColor = fruitBackgroundColorMapper[fruit] as keyof typeof whiteTextColorMapper

  if (!fruitColor) {
    return whiteTextColorMapper['notAFruit']
  }

  if (fruitColor && fruitColor in whiteTextColorMapper) {
    return whiteTextColorMapper[fruitColor]
  }

  return globalColors.black
}
