import { CSSProperties, ReactNode } from 'react'

export interface FlexBoxProps {
  children?: ReactNode
  alignItems?: 'center' | 'start' | 'end'
  justifyContent?: 'center' | 'start' | 'end' | 'evenly' | 'space-between' | 'space-around'
  style?: CSSProperties
  flexWrap?: 'wrap' | 'nowrap'
  gap?: number
  width?: string | number
  fullWidth?: boolean
  direction: 'vertical' | 'horizontal'
}
