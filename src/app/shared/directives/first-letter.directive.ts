import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appFirstLetter]',
  providers: [
    {provide: NG_VALIDATORS,
      useExisting: FirstLetterDirective,
      multi: true}
  ]
})
export class FirstLetterDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const fordbidden = !(new RegExp('[a-zA-Z]', 'i').test(control.value[0]))
      return fordbidden ? {firstLetter: {value: control.value}} : null;
    }
    return null;
  }

}
