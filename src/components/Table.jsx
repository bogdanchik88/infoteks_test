import { useUsers } from '../hooks/useUsers'
import useModalStore from '../store/modalStore'
import usePaginationStore from '../store/paginationStore'
import Loading from '../elements/Loading'
import TableSkeleton from './TableSkeleton'
import { useEffect } from 'react'

const Table = () => { 
  const setModalUser = useModalStore(state => state.setModalUser)

  const users = usePaginationStore(state => state.users)
  const currentPage = usePaginationStore(state => state.currentPage)
  const pageSize = usePaginationStore(state => state.pageSize)
  const setUsers = usePaginationStore(state => state.setUsers)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)

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

  const totalPages = Math.ceil(users.length / pageSize)

  const pagedUsers = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className="relative overflow-auto max-w-350 flex flex-col w-full min-h-100">
      
      {isLoading ? <TableSkeleton/> : (
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border p-2">Фамилия</th>
              <th className="border p-2">Имя</th>
              <th className="border p-2">Отчество</th>
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
                <td className="border p-2">{user.firstName}</td>
                <td className="border p-2">{user.lastName}</td>
                <td className="border p-2">{user.maidenName || '-'}</td>
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
            className='px-3 py-1 bg-blue-300 rounded-2xl disabled:opacity-30 cursor-pointer
              hover:bg-blue-500 active:bg-blue-400'
          >В начало</button>

          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded-2xl disabled:opacity-30 cursor-pointer
              hover:bg-gray-400 active:bg-gray-300"
          >Назад</button>

          <span>
            Страница {currentPage} из {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded-2xl disabled:opacity-30 cursor-pointer
              hover:bg-gray-400 active:bg-gray-300"
          >Вперёд</button> 

          <button onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 bg-red-300 rounded-2xl disabled:opacity-30 cursor-pointer
              hover:bg-red-500 active:bg-red-400'
            >В конец</button>

        </div>
      )}
    </div>
  )
}

export default Table