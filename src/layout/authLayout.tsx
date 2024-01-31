import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import React, { useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';
import theme from '@/themes';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout(props: AuthLayoutProps): JSX.Element {
  const { children } = props;

  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'unset';

    return function cleanup() {
      // Specify how to clean up after this effect:
    };
  }, []);

  const getActiveRoute = (routes: any[]) => {
    let activeRoute = 'Default Brand Text';

    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }

    return activeRoute;
  };

  const getActiveNavbar = (routes: any[]) => {
    let activeNavbar = false;

    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }

    return activeNavbar;
  };

  const getRoutes = (routes: any[]) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }

      if (prop.category === 'account') {
        return getRoutes(prop.views);
      }

      if (prop.layout === '/auth') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  const navRef = useRef<HTMLDivElement>(null);

  document.documentElement.dir = 'ltr';

  return (
    <ChakraProvider theme={theme} resetCSS={false} w='100%'>
      <Box ref={navRef} w='100%'>
        <Box w='100%'>
          <Box ref={wrapper} w='100%'>
            {children}
          </Box>
        </Box>
        <Box px='24px' mx='auto' width='1044px' maxW='100%'>
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default AuthLayout;
