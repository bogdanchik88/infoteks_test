import { create } from "zustand"

const usePaginationStore = create((set) => ({
  users: [],
  currentPage: 1,
  pageSize: 10,

  setUsers: (users) =>
    set({
      users,
      currentPage: 1 // сбрасываем страницу при новых данных
    }),

  setCurrentPage: (page) =>
    set({ currentPage: page })
}))

export default usePaginationStore