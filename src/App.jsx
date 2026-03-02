import NavBar from './components/NavBar'
import Table from './components/table'

function App() {

  return (
    <div className='flex flex-col gap-5 justify-center w-screen h-screen items-center'>
      <NavBar/>      
      <Table/>
    </div>
  )
}

export default App