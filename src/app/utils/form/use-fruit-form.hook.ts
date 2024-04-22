import { HandleSubmit, UseFruitForm } from './use-fruit-form.inerfaces'
import React, { useCallback, useState } from 'react'

import { initialData } from '../../global/campaign/campaign.constants'

export const useHandleForm: UseFruitForm = () => {
  const [itemList, setItemList] = useState<string[]>(initialData)
  const [inputItem, setInputItem] = useState<string>('')

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputItem(e.target.value?.toLowerCase())
    },
    [setInputItem],
  )

  const handleSubmit: HandleSubmit = useCallback(
    (e, data) => {
      e?.preventDefault()

      const currentItemName = data ?? inputItem

      if (!itemList.includes(currentItemName)) {
        setItemList((prev) => [...prev, currentItemName])
      }

      !data && setInputItem('')
    },
    [itemList, inputItem],
  )

  return { itemList, inputItem, handleInputChange, handleSubmit }
}
