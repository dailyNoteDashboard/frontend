import NavigationCard from './components/NavigationCard'
import { usePageNavigation } from '../../shared/hooks/usePageNavigation'

function HomePage() {
  const { goToSchedule, goToDashboard } = usePageNavigation()

  return (
    <main className="min-h-[calc(100svh-160px)] bg-pink-50 px-6 py-12">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="text-center">
          <p className="text-sm font-semibold text-pink-500">Todo Diary</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">오늘의 계획을 정리해볼까요?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
            일정과 할 일을 기록하고, 대시보드에서 진행 상황을 한눈에 확인해요.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <NavigationCard
            icon="🗓️"
            title="일정"
            description="오늘의 할 일과 일정을 다이어리처럼 정리하고 관리해요."
            buttonText="일정 페이지로 이동"
            onClick={goToSchedule}
          />

          <NavigationCard
            icon="📊"
            title="대시보드"
            description="완료한 일과 남은 일을 확인하고 하루의 흐름을 살펴봐요."
            buttonText="대시보드로 이동"
            onClick={goToDashboard}
          />
        </div>
      </section>
    </main>
  )
}

export default HomePage
