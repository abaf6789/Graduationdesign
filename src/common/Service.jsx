import AxiosRequest from "./AxiosRequest"

// 用户
export const createUser = (account) => {
    return AxiosRequest.post(`api/users`, account)
}

export const login = (account) => {
    return AxiosRequest.post(`api/users/session`, account)
}

export const getAllUsers = () => {
    return AxiosRequest.get(`api/users`)
}

export const getUserById = (id) => {
    return AxiosRequest.get(`api/users/${id}`)
}

export const updateUserById = (id) => {
    return AxiosRequest.put(`api/users/5af8edb5b6cac9a13fac3710`, { name: "bbbb", password: "test" })
}

export const updateUserRoleById = (id) => {
    return AxiosRequest.put(`api/users/${id}/role`)
}

//课程

export const getAllCourse = () => {
    return AxiosRequest.get(`api/kecheng`)
}

export const getCourseById = (id) => {
    return AxiosRequest.get(`api/kecheng/${id}`)
}

export const createCourse = () => {
    return AxiosRequest.post(`api/kecheng`)
}

export const updateCourseById = (id) => {
    return AxiosRequest.put(`api/kecheng/${id}`)
}

export const deleteCourseById = (id) => {
    return AxiosRequest.delete(`api/kecheng/${id}`)
}

//Comments

export const getAllComments = () => {
    return AxiosRequest.get(`api/comments`)
}

export const getCommentById = (id) => {
    return AxiosRequest.get(`api/comments/${id}`)
}

export const createComment = () => {
    return AxiosRequest.post(`api/comments`)
}

export const updateCommentById = (id) => {
    return AxiosRequest.put(`api/comments/${id}`)
}

export const deleteCommentById = (id) => {
    return AxiosRequest.delete(`api/comments/${id}`)
}

