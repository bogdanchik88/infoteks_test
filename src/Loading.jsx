const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <img src='/vite.svg' alt="Loading" className="w-24 h-24 animate-spin" />
    </div>
  )
}

export default Loading
