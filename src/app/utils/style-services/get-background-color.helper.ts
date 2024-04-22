import { checkFruit } from '../campaign-services'
import { fruitBackgroundColorMapper } from '../mappers'
import { globalColors } from '../../global/theme'

export const getBackgroundColor = (name: string) => {
  if (!checkFruit(name)) return 'lightgray'

  const fruitBackgroundColor = fruitBackgroundColorMapper[name]

  return fruitBackgroundColor ? fruitBackgroundColor : globalColors.gray
}
