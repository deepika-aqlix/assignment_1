import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiCall= createApi({
reducerPath:'apiCall',
baseQuery: fetchBaseQuery({
    baseUrl:'https://jsonplaceholder.typicode.com/'
}),
endpoints :(builder)=>({
 getAllUsers: builder.query({
 query:()=>({
    url : 'users',
    method : 'GET'
 })
 })
})
})
export const {useGetAllUsersQuery} =apiCall

















