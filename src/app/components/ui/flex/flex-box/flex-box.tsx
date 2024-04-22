import React, { FC } from 'react'
import { FlexBoxProps } from './flex-box.interfaces'

export const FlexBox: FC<FlexBoxProps> = ({ children, direction, fullWidth, style, ...props }) => (
  <div
    style={{
      ...style,
      ...props,
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      width: fullWidth ? '100%' : props.width ?? 'auto',
    }}
  >
    {children}
  </div>
)
