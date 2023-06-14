import { Main, Auth, Profile, NotFound} from './pages';
import { useRoutes } from 'react-router-dom';
import { PrivateRoute } from './components';


export const App = () => {
  const routes = useRoutes([
    {
        path: '/',
        element: <Auth />,
    },
    {
        path: '/main',
        element: <PrivateRoute element={<Main />} />,
    },
    {
        path: '/profile',
        element: <PrivateRoute element={<Profile />} />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

return routes;

};
