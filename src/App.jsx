import { useState, useMemo } from 'react'
import { useUsers } from './hooks/useUsers'
import Table from './components/table'

function App() {
  const [sortField, setSortField] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  const {
    data: users = [],
    refetch,
    isLoading,
    error,
    isRefetching
  } = useUsers()

  return (
    <div className='flex flex-col gap-6 justify-center w-screen h-screen items-center'>
      <Table/>
    </div>
  )
}

export default App