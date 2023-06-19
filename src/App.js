import { Main, Auth, Profile, NotFound } from './pages';
import { useRoutes } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Wrapper } from './components';

export const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Auth />,
    },
    {
      path: '/main',
      element: <PrivateRoute element={<Wrapper><Main /></Wrapper>} />,
    },
    {
      path: '/profile',
      element: <PrivateRoute element={<Wrapper><Profile /></Wrapper>} />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return routes;
};
