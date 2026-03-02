import { create } from "zustand";

const useModalStore = create(
    (set, _) => ({
        currentUser: null,

        setModalUser: (user) => {
            set({currentUser: user})
        },
        
        resetUser: () => {
            set({currentUser: null})
        }

    })
)

export default useModalStore