import useSortStore from "../store/sortStore"

const NavBar = () => {
    const setSortParameter = useSortStore(state => state.setSortParameter)
    const setSortAsc = useSortStore(state => state.setSortAsc)
    const setSortDesc = useSortStore(state => state.toggleSortOrder)
    const resetSorting = useSortStore(state => state.resetSorting)
  return (
    <div className="w-full max-w-350 mx-auto h-20 bg-gray-200 rounded-full flex items-center justify-around p-2">
        <p>Сортировать по</p>
        <button onClick={() => setSortParameter('firstName')} className="cursor-pointer ">ФИО</button>
        <button onClick={() => setSortParameter('age')} className="cursor-pointer">Возрасту</button>  
        <button onClick={() => setSortParameter('gender')} className="cursor-pointer">Полу</button>
        <button onClick={() => setSortParameter('phone')} className="cursor-pointer">Номеру телефона</button>   

        <p>в порядке</p>   
        <button onClick={() => setSortAsc() } className="cursor-pointer">возрастания</button>  
        <button onClick={() => setSortDesc()} className="cursor-pointer">убывания</button>        

        <button onClick={() => resetSorting()} className="cursor-pointer">Сбросить</button>
    </div>
  )
}
export default NavBar