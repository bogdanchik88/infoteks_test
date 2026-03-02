import { createPortal } from 'react-dom'
import useModalStore from '../store/modalStore'

const UserModal = () => {
    const currentUser = useModalStore(state => state.currentUser)
    const resetUser = useModalStore(state => state.resetUser)

    if (!currentUser) return null

    return createPortal(
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-[20px]"
            onClick={resetUser}
            >
            <div className="bg-white p-3 rounded-xl w-125 shadow-xl text-xl relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                className="px-4 py-2 bg-red-500 text-white rounded-2xl cursor-pointer font-medium absolute top-3 right-3
                    hover:bg-red-700
                    active:bg-red-500"
                onClick={resetUser}
                >Close</button>  


                <div className='flex flex-col justify-center items-center text-2xl font-bold'>
                    <h1>{currentUser.firstName} {currentUser.lastName}</h1>
                    <h2>{currentUser.maidenName || ''}</h2> 
                    <img src={currentUser.image} alt="/vite.svg" className='size-32 mt-1'/>
                </div>

                <div className='flex justify-center gap-4 font-medium mb-4'>
                    <p>Возраст: {currentUser.age}</p>
                    <p>Пол: <span className={
                        `${currentUser.gender === 'male' ?
                         'text-blue-400' : 
                         'text-pink-400'}`}>{currentUser.gender}</span></p>
                    <p className={`${currentUser.weight <= 70 ? 
                        'text-green-400' : currentUser.weight <= 120 ?
                        'text-yellow-300' :
                        'text-red-500' 
                    }`}>Вес: {currentUser.weight}</p>
                </div>
                
                <div className='flex flex-col gap-1 font-medium ml-8 mb-4'>
                    <p>Адрес: {currentUser.address.address}</p>
                    <p>Город: {currentUser.address.city}</p>
                    <p>Страна: {currentUser.address.country}</p>
                    <p>Почтовый индекс: {currentUser.address.postalCode}</p>                
                    <p>Штат: {currentUser.address.state}</p>     
                    <p>Код штата: {currentUser.address.stateCode}</p>               
                </div>

                <div className='flex flex-col gap-1 font-medium ml-8'>
                    <p>Номер: {currentUser.phone}</p>
                    <p>Почта: {currentUser.email}</p>
                </div>

            </div>
        </div>,
        document.body
    )
}

export default UserModal