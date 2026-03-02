import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import useSortStore from "../store/sortStore";

export const useUsers = () => {

    const { sortParameter, sortOrder} = useSortStore()
    
    return useQuery({
        queryKey: ['users', sortParameter, sortOrder],
        queryFn: () => getUsers(sortParameter, sortOrder),
    })
}