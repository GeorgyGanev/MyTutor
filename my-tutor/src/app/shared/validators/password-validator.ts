import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function validatePassword(): ValidatorFn {
    
    return (control: AbstractControl) => {
        let isValid = false;
        
        if(control && control instanceof FormGroup){
            let group = control as FormGroup;

            if (group.controls['passwordInput'] && group.controls['rePasswordInput']){
                isValid = group.controls['passwordInput'].value === group.controls['rePasswordInput'].value;
            }
        }
        if (isValid) {
            return null;
        } else {
            return {passwordMatchError: true}
        }
    }

}