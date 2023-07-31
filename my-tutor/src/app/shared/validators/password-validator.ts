import { FormGroup, ValidatorFn } from '@angular/forms';

export function validatePassword(
  passControlOne: string,
  passControlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const password = group.get(passControlOne);
    const rePassword = group.get(passControlTwo);

    return password?.value === rePassword?.value
      ? null
      : { validatePassword: true };
  };
}
