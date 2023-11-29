'use client'

// Third-party Imports
import { Icon as IconifyIcon } from '@iconify/react'
import type { IconProps } from '@iconify/react'

const Icon = (props: IconProps) => {
  return <IconifyIcon fontSize='1.5rem' {...props} />
}

export default Icon
