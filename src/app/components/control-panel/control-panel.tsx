import React, { FC } from 'react'
import { Row } from '../ui/flex'
import { ControlPanelProps } from './control-panel.interfaces'
import { globalColors } from '../../global/theme'

const inputStyle = {
  padding: '10px 15px',
  borderRadius: '20px',
  border: '1px solid #ccc',
  width: '250px',
  outline: 'none',
  fontSize: '1.5rem',
}

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: globalColors.red,
  color: 'white',
  cursor: 'pointer',
  fontSize: '1.5rem',
  outline: 'none',
}

export const ControlPanel: FC<ControlPanelProps> = ({ handleSubmit, inputItem, handleInputChange }) => (
  <Row justifyContent="center">
    <form onSubmit={handleSubmit}>
      <Row gap={20}>
        <input type="text" name="fruit" value={inputItem} onChange={handleInputChange} style={inputStyle} />
        <div>
          <button style={buttonStyle}>Set new item</button>
        </div>
      </Row>
    </form>
  </Row>
)
