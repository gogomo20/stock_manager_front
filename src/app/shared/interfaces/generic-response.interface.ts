export default interface IGenericResponse<T>{
    success: boolean;
    message: string;
    data: T
}