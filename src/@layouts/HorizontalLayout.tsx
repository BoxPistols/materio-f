// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Component Imports
import Footer from './components/Footer'
import PageContent from './components/PageContent'
import Navbar from '../components/layout/horizontal/Navbar'
import Header from './components/horizontal/Header'
import Navigation from '../components/layout/horizontal/Navigation'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { HorizontalNavProvider } from '../@menu-package/contexts/horizontalNavContext'

const HorizontalLayout = ({ children }: ChildrenType) => {
  return (
    <HorizontalNavProvider>
      <VerticalNavProvider>
        <PageContent>
          <Header>
            <Navbar />
            <Navigation />
          </Header>
          {/* Content */}
          <div>{children}</div>
          <Footer />
        </PageContent>
      </VerticalNavProvider>
    </HorizontalNavProvider>
  )
}

export default HorizontalLayout
