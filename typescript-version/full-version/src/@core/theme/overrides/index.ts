// Override Imports
import avatar from './avatar'
import backdrop from './backdrop'
import button from './button'
import Checkbox from './checkbox'
import formControl from './form-control'
import tabs from './tabs'
import typography from './typography'

const Overrides = () => {
  return Object.assign({}, avatar, backdrop, button, Checkbox, formControl, tabs, typography)
}

export default Overrides
