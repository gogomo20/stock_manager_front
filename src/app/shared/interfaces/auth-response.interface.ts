export default interface IAuthResponse {
    name: string,
    username: string,
    token: string,
    permissions: string[],
}