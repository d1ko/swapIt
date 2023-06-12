import { NotFound } from '../../pages/NotFound/NotFound';

export const PrivateRoute = (props) => {
    const { element } = props;
    const isLogged = !!localStorage.getItem('');

    // return isLogged ? element : <NotFound />;
    return isLogged ? <NotFound /> : element;
};
