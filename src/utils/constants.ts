export const BASE_URL = "api/v1/";
export const PORT = Number(process.env.PORT as string) || 8000;
export enum STATUS {
    SUCCESS = "success",
    FAILURE = "failure"
}