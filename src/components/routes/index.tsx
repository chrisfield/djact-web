import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protected-route";

const Home = lazy(() => import("../home"));
const Login = lazy(() => import("../auth/login"));
const Signup = lazy(() => import("../auth/signup"));

const User = lazy(() => import("../user"));
const Map = lazy(() => import("../map"));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={() => <Login />} />
        <Route path="/signup" component={() => <Signup />} />
        <ProtectedRoute>
          <Route path="/user" component={() => <User />} />
          <Route path="/map" component={() => <Map />} />
        </ProtectedRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
