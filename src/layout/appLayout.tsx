// Chakra imports
import { ChakraProvider, Portal, CSSReset } from "@chakra-ui/react"
import Footer from "@/components/Footer"
// Layout components
import AdminNavbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import React from "react"
import { Route } from "react-router-dom"
import routes from "@/routes/config"
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// Custom Chakra theme
import theme from "@/themes"
// Custom components
import MainPanel from "@/components/Layout/MainPanel"
import PanelContainer from "@/components/Layout/PanelContainer"
import PanelContent from "@/components/Layout/PanelContent"

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const getActiveRoute = (routes: any[]) => {
    let activeRoute = "Default Brand Text"
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views)
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views)
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name
        }
      }
    }
    return activeRoute
  }

  const getActiveNavbar = (routes: any[]) => {
    let activeNavbar = false
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views)
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar
          }
        }
      }
    }
    return activeNavbar
  }

  const getRoutes = (routes: any[]) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views)
      }
      if (prop.category === "account") {
        return getRoutes(prop.views)
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }

  document.documentElement.dir = "ltr"

  return (
    <ChakraProvider theme={theme} resetCSS>
      <CSSReset />
      <Sidebar
        routes={routes}
        logoText={"PURITY UI DASHBOARD"}
        display="none"
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            logoText={"PURITY UI DASHBOARD"}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
          />
        </Portal>
        <PanelContent>
          <PanelContainer>{children}</PanelContainer>
        </PanelContent>

        <Footer />
      </MainPanel>
    </ChakraProvider>
  )
}

export default AppLayout
