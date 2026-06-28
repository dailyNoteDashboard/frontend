import { usePageNavigation } from '../../shared/hooks/usePageNavigation'

function HomePage() {
  const { goToSchedule, goToDashboard } = usePageNavigation()

  return (
    <main>
      <button type="button" onClick={goToSchedule}>
        일정
      </button>

      <button type="button" onClick={goToDashboard}>
        대시보드
      </button>
    </main>
  )
}

export default HomePage
