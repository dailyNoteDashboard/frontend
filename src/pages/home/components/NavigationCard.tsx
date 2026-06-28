type NavigationCardProps = {
  icon: string
  title: string
  description: string
  buttonText: string
  onClick: () => void
}

function NavigationCard({ icon, title, description, buttonText, onClick }: NavigationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-52 w-full flex-col items-start rounded-2xl border border-pink-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200"
    >
      <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-pink-100 text-2xl">
        {icon}
      </span>

      <strong className="text-2xl font-bold text-slate-900">{title}</strong>

      <span className="mt-3 text-base leading-7 text-slate-500">{description}</span>

      <span className="mt-auto pt-8 text-sm font-semibold text-pink-500 transition group-hover:text-pink-600">
        {buttonText}
      </span>
    </button>
  )
}

export default NavigationCard
