import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import LazyRoute from '../shared/components/LazyRoute'
import { DashboardPage, HomePage, NotFoundPage, SchedulePage } from './lazyPages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <LazyRoute>
            <HomePage />
          </LazyRoute>
        ),
      },
      {
        path: 'schedule',
        element: (
          <LazyRoute>
            <SchedulePage />
          </LazyRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <LazyRoute>
            <DashboardPage />
          </LazyRoute>
        ),
      },
      {
        path: '*',
        element: (
          <LazyRoute>
            <NotFoundPage />
          </LazyRoute>
        ),
      },
    ],
  },
])

export default router
