import { globalColors } from '../../global/theme'
import { greenList, orangeList, redList, violetList, yellowList } from '../../global/campaign/campaign.constants'

export const getFruitColorMapArray = (fruitList: string[], color: string) =>
  fruitList.reduce((mapper: Record<string, string>, fruit: string) => {
    mapper[fruit] = color
    return mapper
  }, {})

export const fruitBackgroundColorMapper = {
  ...getFruitColorMapArray(redList, globalColors.red),
  ...getFruitColorMapArray(greenList, globalColors.green),
  ...getFruitColorMapArray(orangeList, globalColors.orange),
  ...getFruitColorMapArray(violetList, globalColors.violet),
  ...getFruitColorMapArray(yellowList, globalColors.yellow),
} as const
