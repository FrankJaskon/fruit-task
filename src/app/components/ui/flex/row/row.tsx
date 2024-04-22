import React, { FC } from 'react'
import { FlexBox } from '../flex-box'
import { FlexBoxProps } from '../flex-box/flex-box.interfaces'

export const Row: FC<Omit<FlexBoxProps, 'direction'>> = ({ children, alignItems, justifyContent, ...props }) => (
  <FlexBox direction="horizontal" style={{ alignItems, justifyContent }} {...props}>
    {children}
  </FlexBox>
)
