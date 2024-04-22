import React, { FC, useCallback } from 'react'
import { useHandleForm } from '../../../utils/form'
import { Layout } from '../../ui/layout'
import { ItemList } from '../../item-list'
import { ControlPanel } from '../../control-panel'
import { ClickableTitleList } from '../../clickable-title-list'

export const FruitPanel: FC = () => {
  const { itemList, inputItem, handleInputChange, handleSubmit } = useHandleForm()
  const handleFruitClick = useCallback(
    (name: string) => async () => {
      handleSubmit(undefined, name)
    },
    [handleSubmit],
  )
  return (
    <Layout
      items={[
        {
          top: 50,
          element: <ItemList itemList={itemList} />,
        },
        {
          top: 50,
          element: (
            <ControlPanel handleInputChange={handleInputChange} handleSubmit={handleSubmit} inputItem={inputItem} />
          ),
        },
        {
          top: 30,
          element: <ClickableTitleList handleFruitClick={handleFruitClick} itemList={itemList} />,
        },
      ]}
    />
  )
}
