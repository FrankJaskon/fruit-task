import { ReactNode } from 'react'

interface ElementType {
  top: number
  element: ReactNode
}

export interface LayoutProps {
  items: ElementType[]
}
