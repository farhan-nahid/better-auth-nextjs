import { axios } from "@/configs/axios"
import {
  openErrorNotification,
  openSuccessNotification,
} from "@/utils/notification"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"

const signup = (payload: any) => {
  return axios.post('/api/v1/auth/sign-up/email', payload)
}

export function useSignUp() {
  const router = useRouter();

  return useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signup,
    onSuccess: (response) => {
      openSuccessNotification({ title: "Register Success", description: response?.data?.message })
      router.push("/dashboard")
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        openErrorNotification({ title: "Error", description: error?.response?.data?.message })
      } else {
        openErrorNotification({ title: "Error", description: "An error has occurred" })
      }
    },
  })
}
