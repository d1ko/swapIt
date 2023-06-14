import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { App } from './App';
import './styles//index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        
            <App />
        
    </BrowserRouter>
);
