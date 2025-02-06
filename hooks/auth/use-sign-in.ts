import { axios } from "@/configs/axios"
import {
  openErrorNotification,
  openSuccessNotification,
} from "@/utils/notification"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"

const signIn = (payload: any) => {
  return axios.post(`/api/v1/auth/sign-in/email`, payload)
}

export function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signIn,
    onSuccess: (response) => {
      openSuccessNotification({ title: "Login Success", description: response?.data?.message, })
      setCookie("token", response?.data?.token)
      router.push("/dashboard")
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        openErrorNotification({ title: "Error", description: error?.response?.data?.message, })
      } else {
        openErrorNotification({ title: "Error", description: "An error has occurred", })
      }
    },
  })
}
