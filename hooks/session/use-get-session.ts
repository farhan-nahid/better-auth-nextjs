import { axios } from "@/configs/axios"
import { useQuery } from "@tanstack/react-query"

const getSession = async () => {
  return axios.get(`/api/v1/auth/get-session`,)
}

export function useGetSession() {
  return useQuery({ queryKey: ["get-session"], queryFn: getSession, })
}