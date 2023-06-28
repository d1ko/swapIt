// import { Main, Auth, Profile, NotFound, Registration } from "./pages";
// import { useRoutes } from "react-router-dom";
// import { PrivateRoute } from "./components";
// import { Wrapper } from "./components";
// import { Guide } from "./pages/Guide/Guide";

// export const App = () => {
//   const routes = useRoutes([
//     {
//       path: "/",
//       element: <Auth />,
//     },
//     {
//       path: "/main",
//       element: <PrivateRoute element={<Wrapper><Main /></Wrapper>} />,
//     },
//     {
//       path: "/guide",
//       element: <PrivateRoute element={<Wrapper><Guide /></Wrapper>} />,
//     },
//     {
//       path: "/profile",
//       element: <PrivateRoute element={<Wrapper><Profile /></Wrapper>} />,
//     },
//     {
//       path: "/regis",
//       element: <Registration />,
//     },
//     {
//       path: "*",
//       element: <NotFound />,
//     },
//   ]);

//   return routes;
// };

import AppRoutes from './routes/AppRoutes';
import Layout from "./Layout/Layout"

export const App = () => {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
};