// react import
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// components import
// import Loadable from "@/components/loadable"
// routes import
import ProtectedRoute from "./ProtectedRoute"
// error pages import
// import Error404 from "@/pages/ErrorPages/Error404"
// layout import
import LoginPage from "@/pages/login"
import Loadable from "@/components/loadable"
import AuthLayout from "@/layout/authLayout"
import AppLayout from "@/layout/appLayout"
// pages with lazy imports
const DashboardCrm = Loadable(React.lazy(() => import("@/pages/dashboard")))

const protectedRoutes = [{ path: "/", component: DashboardCrm }]

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        {/* Protected Routes */}

        {protectedRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <AppLayout>
                <ProtectedRoute component={Component} />
              </AppLayout>
            }
          />
        ))}

        {/* Error Routes */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
