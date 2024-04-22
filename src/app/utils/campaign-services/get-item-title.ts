import { getBackgroundColor } from '../style-services'
import { globalColors } from '../../global/theme'

export const getItemTitle = (name: string) =>
  getBackgroundColor(name) !== globalColors.yellow ? name.charAt(0).toUpperCase() + name.slice(1) : name
