import AppRoutes from './routes/AppRoutes';
import Layout from "./Layout/Layout"

export const App = () => {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
};