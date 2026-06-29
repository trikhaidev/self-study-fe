export interface ResponseBaseModel<T>{
    statusCode:number;
    isOk:boolean;
    message:string|null|undefined;
    data:T|null|undefined;
}