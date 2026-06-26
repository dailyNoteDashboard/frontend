import {Link, Outlet} from 'react-router-dom'

function RootLayout() {

    return(
        <div>
            <header>
                <h2>나의 다이어리</h2>

                <nav>
                    <Link to="/">홈</Link>
                    {' | '}
                    <Link to="/schedule">일정</Link>
                    {' | '}
                    <Link to="/dashboard">대시보드</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout