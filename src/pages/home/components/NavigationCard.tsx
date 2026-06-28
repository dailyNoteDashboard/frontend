type NavigationCardProps = {
  icon: string
  title: string
  description: string
  onClick: () => void
}

function NavigationCard({ icon, title, description, onClick }: NavigationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-48 w-full flex-col items-center justify-center rounded-[24px] border border-[#ee5ba8] bg-[#ef64ae] px-8 py-9 text-center text-white shadow-[0_18px_40px_rgba(236,102,173,0.22)] transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#e95aa4] hover:shadow-[0_22px_50px_rgba(236,102,173,0.3)] focus:outline-none focus:ring-4 focus:ring-[#f9acd3]"
    >
      <span className="flex size-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
        {icon}
      </span>

      <strong className="mt-5 text-3xl font-bold tracking-normal">{title}</strong>

      <span className="mt-3 max-w-md text-base leading-7 text-white/85">{description}</span>

      <span className="mt-6 h-px w-10 bg-white/35 transition group-hover:w-16" />
    </button>
  )
}

export default NavigationCard
