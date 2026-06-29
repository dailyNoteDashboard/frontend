import { Suspense, type ReactNode } from 'react'

type LazyRouteProps = {
  children: ReactNode
}

function LazyRoute({ children }: LazyRouteProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[240px] items-center justify-center text-pink-500">
          페이지를 불러오는 중...
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export default LazyRoute
