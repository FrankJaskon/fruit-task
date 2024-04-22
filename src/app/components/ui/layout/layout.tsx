import React, { FC, Fragment } from 'react'
import { Column, FlexBasis, Row } from '../flex'
import { LayoutProps } from './layout.interfaces'

const bodyStyle = {
  backgroundColor: '#eaeaea',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  padding: '20px',
}

export const Layout: FC<LayoutProps> = ({ items }) => (
  <div style={{ ...bodyStyle, boxSizing: 'border-box' }}>
    {/* List of items */}
    <Row>
      <FlexBasis flexBasis={50} />
      <Column fullWidth>
        {items.map(({ element, top }, index) => (
          <Fragment key={index}>
            <FlexBasis flexBasis={top} />
            {element}
          </Fragment>
        ))}
        <FlexBasis flexBasis={50} />
      </Column>
      <FlexBasis flexBasis={50} />
    </Row>
  </div>
)
