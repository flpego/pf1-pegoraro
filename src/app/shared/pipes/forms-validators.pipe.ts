import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formsValidators',
})
export class FormsValidatorsPipe implements PipeTransform {
  transform(
    value: ValidationErrors | undefined | null,
    ...args: unknown[]
  ): unknown {
    if (value) {
      let message: string[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const element = value[key];

          if (key === 'required') message.push('Este campo es requerido');

          if (key === 'pattern')
            message.push('Este campo no cumple con el formato');
        }
      }
      return message.join(' .');
    }
    return null;
  }
}
