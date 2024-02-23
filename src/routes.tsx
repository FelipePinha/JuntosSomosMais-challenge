import { createBrowserRouter } from 'react-router-dom';
import { Members } from './pages/members';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Members />,
    },
]);

export default router;
