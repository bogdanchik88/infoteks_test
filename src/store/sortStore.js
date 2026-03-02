import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSortStore = create(
  persist(
    (set, _) => ({
        sortParameter: 'id',
        sortOrder: 'asc',
        usersLimit: '0',

        setSortParameter: (parameter) => {
            set( { sortParameter : parameter } )
        },

        toggleSortOrder: () => {
          set(state => (
                  {sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc'}
              ))
        },

        setSortAsc: () => {
          set({sortOrder:'asc'})
        },

        setSortDesc: () => {
          set({sortOrder:'desc'})
        },


        resetSorting: () => {
          set( {
            sortParameter: 'id',
            sortOrder: 'asc',
            usersLimit: '0',            
          })
        }

    }),
    {
      name: 'sorting-settings',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useSortStore