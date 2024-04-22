import { getBackgroundColor } from './get-background-color.helper'
import { globalColors } from '../../global/theme'

export const getItemFontSize = (name: string) => (getBackgroundColor(name) === globalColors.orange ? '1.2rem' : '1rem')
