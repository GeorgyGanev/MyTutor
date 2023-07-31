import {  ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn{

    const regExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return (control) => {

        return control.value == "" || regExp.test(control.value)
         ? null
         : {appEmailValidator: true}
    };
}