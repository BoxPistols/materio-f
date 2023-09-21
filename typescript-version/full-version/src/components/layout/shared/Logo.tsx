// Next Imports
// import Img from 'next/image'
import Link from 'next/link'

// Third-party Imports
import styled from '@emotion/styled'

// Type Imports
import type { VerticalNavContextProps } from '@menu-package/contexts/verticalNavContext'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

type LogoTextProps = {
  isHovered?: VerticalNavContextProps['isHovered']
  isCollapsed?: VerticalNavContextProps['isCollapsed']
  transitionDuration?: VerticalNavContextProps['transitionDuration']
}

const LogoText = styled.span<LogoTextProps>`
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed }) =>
    isCollapsed && !isHovered ? 'opacity: 0; margin-inline-start: 0;' : 'opacity: 1; margin-inline-start: 10px;'}
`

const Logo = () => {
  const { isHovered, isCollapsed, transitionDuration } = useVerticalNav()

  // You may return any JSX here to display a logo in the sidebar header
  // return <Img src='/next.svg' width={100} height={25} alt='logo' /> // for example
  return (
    <Link href='/' className='flex items-center'>
      <svg width={22} height={24} viewBox='0 0 22.236 23.8' xmlns='http://www.w3.org/2000/svg' color='#765feb'>
        <g
          fontSize='9pt'
          fillRule='evenodd'
          fill='currentColor'
          strokeWidth='0.25mm'
          stroke='currentColor'
          strokeLinecap='round'
        >
          <path
            fill='currentColor'
            strokeWidth='0.25mm'
            stroke='currentColor'
            vectorEffect='non-scaling-stroke'
            d='M 3.06 23.8 L 0 23.8 L 0 0 L 4.522 0 L 11.118 15.062 L 17.612 0 L 22.236 0 L 22.236 23.8 L 19.006 23.8 L 19.006 4.114 L 12.648 18.428 L 9.452 18.428 L 3.06 4.114 L 3.06 23.8 Z'
          />
        </g>
      </svg>
      <LogoText isHovered={isHovered} isCollapsed={isCollapsed} transitionDuration={transitionDuration}>
        Master
      </LogoText>
    </Link>
  )
}

export default Logo
