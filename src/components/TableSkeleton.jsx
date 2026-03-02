const TableSkeleton = ({ rows = 8 }) => {

  return (
    <div className="max-w-350 overflow-x-visible flex justify-center w-full min-h-100">
      <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border p-2 cursor-pointer">First Name</th>
              <th className="border p-2 cursor-pointer">Last Name</th>
              <th className="border p-2 cursor-pointer">Maiden Name</th>
              <th className="border p-2 cursor-pointer">Age</th>
              <th className="border p-2 cursor-pointer">Gender</th>
              <th className="border p-2 cursor-pointer">Phone</th>
              <th className="border p-2 cursor-pointer">Email</th>
              <th className="border p-2 cursor-pointer">Country</th>
              <th className="border p-2 cursor-pointer">City</th>
            </tr>
          </thead>
        <tbody>
          {fakeUsers.map((user, r) => (
            <tr key={r}>
              <td className="border p-2 bg-gray-100">fakeFirstName</td>
              <td className="border p-2 bg-gray-100">fakeSecondName</td>
              <td className="border p-2 bg-gray-100">fakeMaidenName</td>
              <td className="border p-2 bg-gray-100">fakeAge</td>
              <td className="border p-2 bg-gray-100">fakeGender</td>
              <td className="border p-2 bg-gray-100">fakePhone</td>
              <td className="border p-2 bg-gray-100">fakeEmail</td>
              <td className="border p-2 bg-gray-100">fakeCountry</td>
              <td className="border p-2 bg-gray-100">fakeCity</td>
            </tr>
          ))}
        </tbody>
      </table>      
    </div>

  )
}

export default TableSkeleton