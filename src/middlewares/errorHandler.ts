export default interface IErrorHandle {
    status: number;
    message: string;
}

export class ErrorHandler implements ErrorHandler {
    constructor(error) {}
}
