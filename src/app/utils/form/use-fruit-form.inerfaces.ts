import React from 'react'

export type HandleSubmit = (event: React.FormEvent<HTMLFormElement> | undefined, data?: string) => void
export type HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => void

export type UseFruitForm = () => {
  itemList: string[]
  inputItem: string
  handleInputChange: HandleInputChange
  handleSubmit: HandleSubmit
}
