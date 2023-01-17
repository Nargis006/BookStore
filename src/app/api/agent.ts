import axios , { AxiosError, AxiosResponse } from "axios";
import { User, UserFormValues } from "../model/user";

axios.defaults.baseURL =  'http://ec2-18-117-183-116.us-east-2.compute.amazonaws.com:9090';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Users = {
    login: (user: any) => requests.post<any>('/auth/login', user),
}

const agent ={
    Users
}

export default agent;
// const Activities = {
//     list: (params: URLSearchParams) => axios.get<PaginatedResult<Activity[]>>('/activities', { params })
//         .then(responseBody),
//     details: (id: string) => requests.get<Activity>(`/activities/${id}`),
//     create: (activity: ActivityFormValues) => requests.post<void>('/activities', activity),
//     update: (activity: ActivityFormValues) => requests.put<void>(`/activities/${activity.id}`, activity),
//     delete: (id: string) => requests.del<void>(`/activities/${id}`)
// }