export const getUsers = async (sortParameter, sortOrder) => {
    const res = await fetch(`https://dummyjson.com/users?sortBy=${sortParameter}&order=${sortOrder}`)
    const data = await res.json()

    return data.users
}