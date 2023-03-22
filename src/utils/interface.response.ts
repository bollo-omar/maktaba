export default interface IResponse {
    readonly status: number;
    readonly message: string;
    readonly data: any;
    readonly stack: string;
}