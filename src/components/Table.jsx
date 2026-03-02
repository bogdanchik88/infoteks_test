import { useUsers } from '../hooks/useUsers'
import useModalStore from '../store/modalStore'
import usePaginationStore from '../store/paginationStore'
import Loading from '../elements/Loading'
import TableSkeleton from './TableSkeleton'
import { useEffect } from 'react'
import useSortStore from '../store/sortStore'

const Table = () => { 
  const setModalUser = useModalStore(state => state.setModalUser)

  const users = usePaginationStore(state => state.users)
  const currentPage = usePaginationStore(state => state.currentPage)
  const pageSize = usePaginationStore(state => state.pageSize)
  const setUsers = usePaginationStore(state => state.setUsers)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)

  const sortParameter = useSortStore(state => state.sortParameter)
  const sortOrder = useSortStore(state => state.sortOrder)
  const filterValue = useSortStore(state => state.filterValue)

  const {
    data: fetchedUsers = [],
    isLoading,
    isRefetching
  } = useUsers()

  const isShowLoading = isLoading || isRefetching

  useEffect(() => {
    if (fetchedUsers.length) {
      setUsers(fetchedUsers)
    }
  }, [fetchedUsers])

  const filteredUsers = users
    .map(user => ({
      ...user,
      fullName: `${user.lastName} ${user.firstName} ${user.maidenName || ''}`.trim()
    }))
    .filter(user => {
      if (!sortParameter || sortParameter === 'id') return true
      if (!filterValue) return true

      const value = sortParameter === 'fullName' 
                    ? user.fullName
                    : user[sortParameter] ?? ''

      return String(value).toLowerCase().includes(filterValue.toLowerCase())
    })
    .sort((a, b) => {
      if (!sortParameter || sortParameter === 'id') return 0
      const aVal = sortParameter === 'fullName' ? a.fullName : a[sortParameter]
      const bVal = sortParameter === 'fullName' ? b.fullName : b[sortParameter]

      if (aVal == null) return 1
      if (bVal == null) return -1

      if (sortOrder === 'asc') return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
      return aVal < bVal ? 1 : aVal > bVal ? -1 : 0
  })

  const totalPages = Math.ceil(filteredUsers.length / pageSize)

  const pagedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className="relative overflow-auto max-w-350 flex flex-col w-full min-h-100">
      
      {isLoading ? <TableSkeleton/> : (
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr onClick={() => console.log(users)}>
              <th className="border p-2">ФИО</th>
              <th className="border p-2">Возраст</th>
              <th className="border p-2">Пол</th>
              <th className="border p-2">Телефон</th>
              <th className="border p-2">Почта</th>
              <th className="border p-2">Страна</th>
              <th className="border p-2">Город</th>
            </tr>
          </thead>

          <tbody>
            {pagedUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => setModalUser(user)}
              >   
                <td className="border p-2">{user.firstName} {user.lastName} {user.maidenName || ''}</td>                           
                <td className="border p-2">{user.age}</td>
                <td className="border p-2">{user.gender}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.address.country}</td>
                <td className="border p-2">{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isShowLoading && <Loading/>}

      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4 text-xl text-medium">

          <button onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className='px-3 py-1 bg-blue-300 rounded-full disabled:opacity-30 cursor-pointer transition-colors duration-200
              hover:bg-blue-500 active:bg-blue-400'
          >В начало</button>

          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded-full disabled:opacity-30 cursor-pointer transition-colors duration-200
              hover:bg-gray-400 active:bg-gray-300"
          >Назад</button>

          <span>
            Страница {currentPage} из {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded-full disabled:opacity-30 cursor-pointer transition-colors duration-200
              hover:bg-gray-400 active:bg-gray-300"
          >Вперёд</button> 

          <button onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 bg-red-300 rounded-full disabled:opacity-30 cursor-pointer transition-colors duration-200
              hover:bg-red-500 active:bg-red-400'
            >В конец</button>

        </div>
      )}
    </div>
  )
}

export default Table