// Type Imports
import type { Skin } from '@core/types'

// Override Imports
import accordion from './accordion'
import Alerts from './alerts'
import Autocomplete from './autocomplete'
import avatar from './avatar'
import backdrop from './backdrop'
import badges from './badges'
import breadcrumbs from './breadcrumbs'
import button from './button'
import buttonGroup from './button-group'
import card from './card'
import Checkbox from './checkbox'
import chip from './chip'
import dialog from './dialog'
import drawer from './drawer'
import formControl from './form-control'
import iconButton from './icon-button'
import input from './input'
import list from './list'
import menu from './menu'
import pagination from './pagination'
import paper from './paper'
import Radio from './radio'
import Select from './select'
import slider from './slider'
import snackbar from './snackbar'
import switchOverrides from './switch'
import tabs from './tabs'
import timeline from './timeline'
import toggleButton from './toggle-button'
import tooltip from './tooltip'
import typography from './typography'

const overrides = (skin: Skin) => {
  return Object.assign(
    {},
    accordion(skin),
    Alerts,
    Autocomplete(skin),
    avatar,
    backdrop,
    badges,
    breadcrumbs,
    button,
    buttonGroup,
    card(skin),
    Checkbox,
    chip,
    dialog(skin),
    drawer(skin),
    formControl,
    iconButton,
    input,
    list,
    menu(skin),
    pagination,
    paper,
    Radio,
    Select,
    slider,
    snackbar(skin),
    switchOverrides,
    tabs,
    timeline,
    toggleButton,
    tooltip,
    typography
  )
}

export default overrides
