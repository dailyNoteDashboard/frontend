import { lazy } from 'react'

export const HomePage = lazy(() => import('../pages/home/HomePage'))
export const SchedulePage = lazy(() => import('../pages/schedule/SchedulePage'))
export const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'))
export const NotFoundPage = lazy(() => import('../pages/notFound/NotFoundPage'))
