import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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