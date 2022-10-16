import { AbstractControl, FormControl, Validators } from "@angular/forms";

export class kmFormControl
{
    getControl(defaultvalue:any,validations:Validators):AbstractControl
    {
        return new FormControl(defaultvalue,validations);
    }
}   