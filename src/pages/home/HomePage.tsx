import FloatingDecorations from './components/FloatingDecorations'
import NavigationCard from './components/NavigationCard'
import { usePageNavigation } from '../../shared/hooks/usePageNavigation'

function HomePage() {
  const { goToSchedule, goToDashboard } = usePageNavigation()

  return (
    <main className="relative min-h-svh overflow-hidden bg-[linear-gradient(180deg,#fffdf4_0%,#fff6fb_52%,#fffdf4_100%)] px-5 py-8 text-[#5a4153] sm:px-8 lg:px-10">
      <FloatingDecorations />

      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-64px)] max-w-6xl flex-col justify-center">
        <div className="animate-fade-up text-center">
          <div className="mx-auto flex w-fit items-center gap-4 rounded-full border border-[#ffd1e8] bg-white/85 px-5 py-3 shadow-[0_12px_30px_rgba(236,102,173,0.16)] backdrop-blur">
            <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[#ef64ae] shadow-[0_10px_22px_rgba(236,102,173,0.35)]">
              <span className="absolute left-2 top-2 h-8 w-1 rounded-full bg-white/70" />
              <span className="absolute left-4 top-3 h-1 w-5 rounded-full bg-white/80" />
              <span className="absolute left-4 top-5 h-1 w-4 rounded-full bg-white/60" />
              <span className="absolute left-4 top-7 h-1 w-5 rounded-full bg-white/50" />
            </div>

            <div className="text-left">
              <p className="text-sm font-bold text-[#ef64ae]">Todo Diary</p>
              <p className="text-xs font-medium text-[#9a7a91]">
                Daily planner web
              </p>
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-bold text-[#463247] sm:text-5xl">
            오늘의 계획을 정리해볼까요?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#7d667a] sm:text-lg">
            일정과 할 일을 다이어리처럼 기록하고, 대시보드에서 하루의 흐름을
            한눈에 확인해요.
          </p>
        </div>

        <div className="mt-12 grid animate-fade-up-delayed gap-5 lg:grid-cols-2">
          <NavigationCard
            icon="🗓️"
            title="일정"
            description="오늘의 할 일과 일정을 정리해요."
            onClick={goToSchedule}
          />

          <NavigationCard
            icon="📊"
            title="대시보드"
            description="완료 현황과 하루 흐름을 확인해요."
            onClick={goToDashboard}
          />
        </div>
      </section>
    </main>
  )
}

export default HomePage