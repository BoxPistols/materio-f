// Type Imports
import type { Skin } from '@core/types'

// Override Imports
import accordion from './accordion'
import Alerts from './alerts'
import Autocomplete from './autocomplete'
import avatar from './avatar'
import backdrop from './backdrop'
import button from './button'
import buttonGroup from './button-group'
import card from './card'
import Checkbox from './checkbox'
import chip from './chip'
import dialog from './dialog'
import drawer from './drawer'
import formControl from './form-control'
import iconButton from './icon-button'
import paper from './paper'
import switchOverrides from './switch'
import tabs from './tabs'
import toggleButton from './toggle-button'
import typography from './typography'

const overrides = (skin: Skin) => {
  return Object.assign(
    {},
    accordion(skin),
    Alerts,
    Autocomplete,
    avatar,
    backdrop,
    button,
    buttonGroup,
    card(skin),
    Checkbox,
    chip,
    dialog(skin),
    drawer(skin),
    formControl,
    iconButton,
    paper,
    switchOverrides,
    tabs,
    toggleButton,
    typography
  )
}

export default overrides
