export type TypeFetching =
   'iddle' | 'pending' | 'succeded' | 'rejected'


export interface IPagination {
   page: number;
   length: number;
   pageSize: number;
   totalPages: number
}