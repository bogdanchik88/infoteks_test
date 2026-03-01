import { useState, useMemo } from 'react'
import { useUsers } from './hooks/useUsers'

function App() {
  const [sortField, setSortField] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  const {
    data: users = [],
    refetch,
    isLoading,
    error
  } = useUsers()

  return (
    <div className='flex flex-col gap-6 justify-center w-screen h-screen items-center'>

      <button
        className='border-2 border-black bg-amber-100 hover:bg-amber-700 active:bg-violet-800 p-2'
        onClick={refetch}
      >
        спарсить юзеров
      </button>
      {isLoading && <p>Парсим юзеров....</p>}
      {error && <p>Не спарсили юзеров TAT</p>}      
      <div className="overflow-auto max-w-full">
        {users.length > 0 && <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('firstName')}>First Name</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('lastName')}>Last Name</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('maidenName')}>Maiden Name</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('gender')}>Gender</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('phone')}>Phone</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('email')}>Email</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('address.country')}>Country</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('address.city')}>City</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border p-2">{user.firstName}</td>
                <td className="border p-2">{user.lastName}</td>
                <td className="border p-2">{user.maidenName}</td>
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
    </div>
  )
}

export default App