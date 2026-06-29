function FloatingDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="animate-float-slow absolute left-[6%] top-[14%] size-36 rounded-full bg-[#ff9acd]/25 blur-3xl" />
      <span className="animate-float-delay absolute right-[8%] top-[24%] size-44 rounded-full bg-[#ffd86f]/25 blur-3xl" />
      <span className="animate-float-reverse absolute bottom-[10%] left-[42%] size-40 rounded-full bg-[#ef64ae]/15 blur-3xl" />
    </div>
  )
}

export default FloatingDecorations
