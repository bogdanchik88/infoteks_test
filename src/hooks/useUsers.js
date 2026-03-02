import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import useSortStore from "../store/sortStore";

export const useUsers = () => {

    const { sortParameter, sortOrder, usersLimit} = useSortStore()

    return useQuery({
        queryKey: ['users', sortParameter, sortOrder, usersLimit],
        queryFn: () => getUsers(sortParameter, sortOrder, usersLimit),
    })
}