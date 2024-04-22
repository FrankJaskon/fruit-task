import React from 'react'
import { FC, memo } from 'react'
import { FlexBasisProps } from './flex-basis.interfaces'
import { FlexBox } from '../flex-box'

export const FlexBasis: FC<FlexBasisProps> = memo(function FlexBasisFunction({ flexBasis }: FlexBasisProps) {
  return <FlexBox direction="horizontal" style={{ flexBasis, flexShrink: 0 }} />
})
