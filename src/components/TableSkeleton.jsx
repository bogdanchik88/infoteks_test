const TableSkeleton = ({ rows = 8, columns = 8 }) => {
  return (
    <table className="border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          {Array.from({ length: columns }).map((_, i) => (
            <th key={i} className="border p-2 bg-gray-200">&nbsp;</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, r) => (
          <tr key={r} className="animate-pulse">
            {Array.from({ length: columns }).map((_, c) => (
              <td key={c} className="border p-2 bg-gray-100">&nbsp;</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableSkeleton
