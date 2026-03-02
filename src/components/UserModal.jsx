import { createPortal } from 'react-dom'
import useModalStore from '../store/modalStore'
import { useEffect } from 'react'

const UserModal = () => {
    const currentUser = useModalStore(state => state.currentUser)
    const resetUser = useModalStore(state => state.resetUser)

    useEffect(() => {
        if (!currentUser) return
        document.body.style.overflow = "hidden"
        return () => {
        document.body.style.overflow = "auto"
        }
    }, [])

    if (!currentUser) return null

    return createPortal(
        <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={resetUser}
        >
        <div
            className="bg-white p-6 rounded-xl w-96 shadow-xl"
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-xl font-bold mb-4">
            {currentUser.firstName} {currentUser.lastName}
            </h2>

            <p>Email: {currentUser.email}</p>
            <p>Phone: {currentUser.phone}</p>
            <p>Age: {currentUser.age}</p>
            <p>Gender: {currentUser.gender}</p>

            <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={resetUser}
            >
            Close
            </button>
        </div>
        </div>,
        document.body
    )
}

export default UserModal
