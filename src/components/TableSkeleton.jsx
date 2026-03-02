const TableSkeleton = ({ rows = 15 }) => {
  return (
    <div className="max-w-350 overflow-x-visible flex justify-center w-full min-h-100">
      <table className="border-collapse border border-gray-400 w-full table-fixed">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-200">First Name</th>
            <th className="border p-2 bg-gray-200">Last Name</th>
            <th className="border p-2 bg-gray-200">Maiden Name</th>
            <th className="border p-2 bg-gray-200">Age</th>
            <th className="border p-2 bg-gray-200">Gender</th>
            <th className="border p-2 bg-gray-200">Phone</th>
            <th className="border p-2 bg-gray-200">Email</th>
            <th className="border p-2 bg-gray-200">Country</th>
            <th className="border p-2 bg-gray-200">City</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r} className="animate-pulse">
              <td className="border p-2 bg-gray-100">fakeFirstName</td>
              <td className="border p-2 bg-gray-100">fakeLastName</td>
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