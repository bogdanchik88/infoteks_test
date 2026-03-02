export const getUsers = async (sortParameter, sortOrder, usersLimit) => {
    const res = await fetch(`https://dummyjson.com/users?sortBy=${sortParameter}&order=${sortOrder}&limit=${usersLimit}`)
    const data = await res.json()

    return data.users
}