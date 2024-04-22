import { HandleInputChange, HandleSubmit } from '../../utils/form/use-fruit-form.inerfaces'

export interface ControlPanelProps {
  handleSubmit: HandleSubmit
  inputItem: string
  handleInputChange: HandleInputChange
}
