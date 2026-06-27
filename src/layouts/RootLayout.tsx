import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <header>
        <h1>나의 다이어리</h1>

        <nav>
          <NavLink to="/">홈</NavLink>
          {' | '}
          <NavLink to="/schedule">일정</NavLink>
          {' | '}
          <NavLink to="/dashboard">대시보드</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
