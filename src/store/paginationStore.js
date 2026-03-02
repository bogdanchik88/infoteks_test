import { create } from "zustand"

const usePaginationStore = create((set) => ({
  users: [],
  currentPage: 1,
  pageSize: 8,

  setUsers: (users) =>
    set({
      users,
      currentPage: 1
    }),

  setCurrentPage: (page) =>
    set({ currentPage: page })
}))

export default usePaginationStore