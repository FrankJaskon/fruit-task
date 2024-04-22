export interface AllFruitProps {
  itemList: string[]
  handleFruitClick: (value: string) => () => void
}
