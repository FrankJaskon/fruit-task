import { getBackgroundColor } from './get-background-color.helper'
import { getTextColor } from './get-text-color.helper'
import { getItemFontSize } from './get-font-size.helper'
import { checkFruit } from '../campaign-services'
import { ItemStyleOptions } from './style.interfaces'

export const getItemStyleOptions = (name: string): ItemStyleOptions => {
  return {
    backgroundColor: getBackgroundColor(name),
    color: getTextColor(name),
    fontSize: getItemFontSize(name),
    borderRadius: checkFruit(name) ? '50%' : 'none',
  }
}
