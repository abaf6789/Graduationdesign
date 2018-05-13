import AxiosRequest from "./AxiosRequest"

const users = "users"

export const createUser = () => {
    return AxiosRequest.post(`api/${users}`, {})
}
