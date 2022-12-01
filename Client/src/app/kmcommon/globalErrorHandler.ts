import { ErrorHandler, Injectable} from '@angular/core';


@Injectable(
    {
        providedIn:"root"
    }
)

export class globalErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        console.error(error);
        // add this to logs logging service
    }
    
}