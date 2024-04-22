import React, { CSSProperties, FC, memo } from 'react'
import { checkFruit, getItemTitle } from '../../utils/campaign-services'
import { ItemProps } from './item.interfaces'

const itemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  width: 150,
  height: 150,
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
}
export const Item: FC<ItemProps> = memo(function FruitItem({ name, styleOptions }: ItemProps) {
  return (
    <div
      style={{
        ...itemStyle,
        ...styleOptions,
      }}
    >
      <span>{getItemTitle(name)}</span>
      {!checkFruit(name) && <span>not a fruit</span>}
    </div>
  )
})
