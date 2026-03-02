import usePaginationStore from "../store/paginationStore"
import useSortStore from "../store/sortStore"

const NavBar = () => {
  const setSortParameter = useSortStore(state => state.setSortParameter)
  const sortParameter = useSortStore(state => state.sortParameter)
  const sortOrder = useSortStore(state => state.sortOrder)
  const setSortAsc = useSortStore(state => state.setSortAsc)
  const setSortDesc = useSortStore(state => state.setSortDesc)
  const resetSorting = useSortStore(state => state.resetSorting)
  const filterValue = useSortStore(state => state.filterValue);
  const setFilter = useSortStore(state => state.setFilter);

  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)

  const sortParams = [
    { key: 'firstName', label: 'Фамилии' },
    { key: 'lastName', label: 'Имени' },
    { key: 'maidenName', label: 'Отчеству' },
    { key: 'age', label: 'Возрасту' },
    { key: 'gender', label: 'Полу' },
    { key: 'phone', label: 'Телефону' }
  ]

  const inputFilter = (val) => {
    setFilter(val)
    setCurrentPage(1)
  }

  return (
    <div className="w-full max-w-350 mx-auto px-9 bg-gray-200 rounded-full flex items-center justify-around p-2 text-lg font-medium shadow-md">
  
      <div className="flex flex-col items-start gap-2">
        <span>Сортировать по:</span>
          <div className="flex gap-2">
            {sortParams.map(p => (
              <button
                key={p.key}
                onClick={() => setSortParameter(p.key)}
                className={`px-3 py-2 rounded-full cursor-pointer transition-colors duration-200
                  ${sortParameter === p.key 
                    ? 'bg-blue-500 text-white shadow' 
                    : 'bg-gray-100 hover:bg-gray-400'}`}
              >
                {p.label}
              </button>
            ))}            
          </div>

      </div>

      <input
        type="text"
        className="border py-2 px-3 rounded-2xl text-xl"
        placeholder="Введите значение..."
        value={filterValue}
        onChange={(e) => inputFilter(e.target.value)}
      />

      <div className="flex items-start flex-col gap-2">
        <span>Порядок:</span>        
        <div className="flex justify-between gap-2">
          <div className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300
              ${sortOrder === 'desc' ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => sortOrder === 'asc' ? setSortDesc() : setSortAsc()}>
            <div
            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300
              ${sortOrder === 'desc' ? 'translate-x-7' : 'translate-x-0'}`}/>
          </div>
          <p className="w-40">{sortOrder === 'asc' ? 'По возрастанию' : 'По убыванию'}</p>          
        </div>



      </div>

      <button
        onClick={() => resetSorting()}
        className="px-4 py-2 bg-red-400 text-white rounded-full cursor-pointer 
          hover:bg-red-500
          active:bg-red-400"
      >Сбросить</button>

    </div>
  )
}

export default NavBar