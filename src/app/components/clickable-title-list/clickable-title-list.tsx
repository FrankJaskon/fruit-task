import React, { FC, Fragment } from 'react'
import { Row } from '../ui/flex'
import { AllFruitProps } from './clickable-title-list.interfaces'
import { globalColors } from '../../global/theme'
import { allFruits } from '../../global/campaign/campaign.constants'

const listItemStyle = {
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '15px',
  backgroundColor: globalColors.lightGray,
  transition: 'background-color 0.3s',
  fontSize: '1.2rem',
}
export const ClickableTitleList: FC<AllFruitProps> = ({ itemList, handleFruitClick }) => (
  <Row flexWrap="wrap" alignItems="center" gap={10}>
    {allFruits.map((fruit) => (
      <Fragment key={fruit}>
        <span
          style={{
            ...listItemStyle,
            color: itemList.includes(fruit) ? globalColors.darkorchid : globalColors.black,
          }}
          onClick={handleFruitClick(fruit)}
        >
          {fruit}
        </span>
      </Fragment>
    ))}
  </Row>
)
