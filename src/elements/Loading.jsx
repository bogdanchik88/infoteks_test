import ViteLogo from '../assets/vite.svg'

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
      <img src={ViteLogo} alt="Loading" className="w-40 h-40 animate-spin" />
    </div>
  )
}

export default Loading
