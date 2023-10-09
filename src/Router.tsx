import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "config/routes";

const Router: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element}>
            {route.children ? (
              route.children.map((childRoute) => (
                <Route
                  key={childRoute.name}
                  path={childRoute.path}
                  element={childRoute.element}
                ></Route>
              ))
            ) : (
              <></>
            )}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
