import React, { FC } from 'react'
import { Item } from '../item'
import { getItemStyleOptions } from '../../utils/style-services'
import { Row } from '../ui/flex'
import { ItemListProps } from './item-list.interfaces'

export const ItemList: FC<ItemListProps> = ({ itemList }) => (
  <Row>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 40,
        width: '100%',
      }}
    >
      {itemList.map((name) => (
        <Item key={name} name={name} styleOptions={getItemStyleOptions(name)} />
      ))}
    </div>
  </Row>
)
