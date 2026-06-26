import {createBrowserRouter} from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/home/HomePage'
import SchedulePage from '../pages/schedule/SchedulePage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import NotFoundPage from '../pages/notFound/NotFoundPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'schedule',
                element: <SchedulePage />,
            },
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])

export default router