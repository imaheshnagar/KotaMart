import { FormGroup } from "@angular/forms";

export class errormessage
{
   getControlError(fg:FormGroup, cntrl:string):string
    {
      const fgcontrol = fg.get(cntrl);
  
      if(fgcontrol && fgcontrol.errors !=null && fgcontrol.touched && fgcontrol.invalid )
      {
        if(fgcontrol.errors['required'])
        {
            return "This field is required";;
        }
        if(fgcontrol.errors['pattern'])
        {
            return "This field is required pattern";;
        }
      }    
  
      return ""
  
    }

}