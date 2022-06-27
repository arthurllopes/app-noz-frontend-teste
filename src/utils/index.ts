import { UserData } from "../context/userContext"

export const isUserLoggedIn = () => localStorage.getItem('userData') && localStorage.getItem('accessToken')

export const getUserData = () => JSON.parse(localStorage.getItem('userData') || "")

export const getUserToken = () => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    const key = JSON.parse(token)
    return key
  }
}

export const setUserSession = (data: UserData, token: string) => {
  localStorage.setItem('userData', JSON.stringify(data))
  localStorage.setItem('accessToken', JSON.stringify(token))
}

export const unsetUserSession = async () => {
    localStorage.clear()
    window.location.href= '/'
}
