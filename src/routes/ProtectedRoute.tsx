// import React, { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import useToken from "@/hooks/useToken";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  // const { token } = useToken();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [token, navigate]);

  // return token ? <Component {...rest} /> : <Navigate to="/" replace />;
  return <Component {...rest} />;
};

export default ProtectedRoute;
