// Type Imports
import type { ChildrenType } from '../../@core/types'

// Layout Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'
import VerticalLayout from '../../@layouts/VerticalLayout'
import HorizontalLayout from '../../@layouts/HorizontalLayout'

// Component Imports
import Providers from '../../components/Providers'
import Navigation from '../../components/layout/vertical/Navigation'
import Header from '../../components/layout/horizontal/Header'
import Navbar from '../../components/layout/vertical/Navbar'
import VerticalFooter from '../../components/layout/vertical/Footer'
import HorizontalFooter from '../../components/layout/horizontal/Footer'
import Customizer from '../../@core/components/customizer'

// Util Imports
import { getDirection } from '../../utils/commonUtils'

const Layout = ({ children }: ChildrenType) => {
  const dir = getDirection()

  return (
    <Providers>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<VerticalFooter />}>
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout header={<Header />} footer={<HorizontalFooter />}>
            {children}
          </HorizontalLayout>
        }
      />
      <Customizer dir={dir} />
    </Providers>
  )
}

export default Layout
