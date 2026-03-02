import NavBar from './components/NavBar'
import Table from './components/table'

function App() {

  return (
    <div className="flex flex-col w-screen h-screen items-center pt-4 text-[18px]">
      <div className="w-full max-w-350">
        <NavBar />
      </div>

      <div className="w-full max-w-350 flex-1 overflow-auto mt-4 max-h-[75vh]">
        <Table />
      </div>
    </div>
  )
}

export default App