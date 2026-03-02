import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSortStore = create(
  persist(
    (set, _) => ({
        sortParameter: 'id',
        sortOrder: 'asc',

        setSortParameter: (parameter) => {
            set( { sortParameter : parameter } )
        },

        toggleSortOrder: () => {
            set(state => (
                    {sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc'}
                ))
        }

    }),
    {
      name: 'sorting-settings',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useSortStore