import { useUsers } from '../hooks/useUsers'
import useModalStore from '../store/modalStore'
import Loading from './Loading'
import TableSkeleton from './TableSkeleton'

const Table = () => { 

    const setModalUser = useModalStore(state => state.setModalUser)

    const {
    data: users = [],
    isLoading,
    error,
    isRefetching
    } = useUsers()

    const isShowLoading = isLoading || isRefetching

  return (
      <div className="relative overflow-auto max-w-350 flex justify-center w-full min-h-100">
        {isLoading ? <TableSkeleton/> : (
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border p-2 cursor-pointer">Фамилия</th>
              <th className="border p-2 cursor-pointer">Имя</th>
              <th className="border p-2 cursor-pointer">Отчество</th>
              <th className="border p-2 cursor-pointer">Возраст</th>
              <th className="border p-2 cursor-pointer">Пол</th>
              <th className="border p-2 cursor-pointer">Телефон</th>
              <th className="border p-2 cursor-pointer">Почта</th>
              <th className="border p-2 cursor-pointer">Страна</th>
              <th className="border p-2 cursor-pointer">Город</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => setModalUser(user)}>
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
        </table>)}
        {isShowLoading && <Loading/>}
      </div>
  )
}

export default Table
