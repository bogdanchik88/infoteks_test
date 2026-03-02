import { useUsers } from '../hooks/useUsers'
import Loading from './Loading'
import TableSkeleton from './TableSkeleton'

const Table = () => { 
    const {
    data: users = [],
    isLoading,
    error,
    isRefetching
    } = useUsers()

  return (
      <div className="overflow-auto max-w-350 flex justify-center w-full">
        {(isLoading || isRefetching) && <Loading/>}
        {isLoading && <TableSkeleton/>}
        {users.length > 0 && <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border p-2 cursor-pointer">First Name</th>
              <th className="border p-2 cursor-pointer">Last Name</th>
              <th className="border p-2 cursor-pointer">Maiden Name</th>
              <th className="border p-2 cursor-pointer">Gender</th>
              <th className="border p-2 cursor-pointer">Phone</th>
              <th className="border p-2 cursor-pointer">Email</th>
              <th className="border p-2 cursor-pointer">Country</th>
              <th className="border p-2 cursor-pointer">City</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border p-2">{user.firstName}</td>
                <td className="border p-2">{user.lastName}</td>
                <td className="border p-2">{user.maidenName || '-'}</td>
                <td className="border p-2">{user.gender}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.address.country}</td>
                <td className="border p-2">{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
  )
}

export default Table
